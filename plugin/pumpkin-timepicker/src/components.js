export default function (editor, opt = {}) {
    const c = opt;


    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    const traits = [
        {
            name: 'dateFormat',
            placeholder: 'Y-m-d'
        },
        {
            name: 'defalutDate',
            placeholder: `${new Date().Format('yyyy-MM-dd')}`
        },
        {
            name: 'maxDate'
        },
        {
            name: 'minDate',
            changeProps: 1,
        },
        {
            type: 'select',
            name: 'mode',
            options: [
                { id: 'single', name: 'Single' },
                { id: 'multiple', name: 'Multiple' },
                { id: 'range', name: 'Range' }
            ],
            value: 'single',
            changeProps: 1
        },
        {
            type: 'checkbox',
            name: 'enableTime',
            valueTrue: 'true',
            valueFalse: 'false',
            changeProps: 1
        },
        {
            type: 'checkbox',
            name: 'enableSeconds',
            valueTrue: 'true',
            valueFalse: 'false',
            changeProps: 1
        }
    ];
    domc.addType(c.inputType, {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                name: c.labelName,
                draggable: c.draggable,
                scriptsrc: c.script,
                stylesrc: c.style,
                traits,
                script: function () {
                    const fpConfig = {
                        dateFormat: this.getAttribute('dateformat'),
                        maxDate: this.getAttribute('maxdate'),
                        minDate: this.getAttribute('mindate'),
                        defaultDate: this.getAttribute('defalutdate'),
                        mode: this.getAttribute('mode'),
                        enableTime: this.getAttribute('enabletime'),
                        enableSeconds: this.getAttribute('enableseconds')
                    };
                    const init = () => {
                        const el = this;
                        el.innerHTML = `<input class="flatpickr flatpickr-input input" data-gjs-type="input" style="width:100%;" />`
                        flatpickr('.flatpickr-input', fpConfig);
                    };
                    const appendStyle = () => {
                        const link = document.createElement('link');
                        link.href = '{[ stylesrc ]}';
                        link.rel = 'stylesheet';
                        document.head.appendChild(link);
                    };
                    const appendScript = () => {
                        const scr = document.createElement('script');
                        scr.src = '{[ scriptsrc ]}';
                        scr.onload = init;
                        document.head.appendChild(scr);
                    }
                    if (!window.flatpickr) {
                        appendStyle();
                        appendScript();
                    } else {
                        init();
                    }
                }
            },
            init() {
                this.on('change:attributes', () => this.trigger('change:script'));
            }
        }, {
            isComponent(el) {
                if (el.getAttribute &&
                    el.getAttribute('data-gjs-type') == c.inputType) {
                    return {
                        type: c.inputType
                    };
                }
            },
        }),
        view: defaultView.extend({
            init() {
                const comps = this.model.get('components');
                if (!comps.length) {
                    comps.reset();
                }
            }
        })
    });
}