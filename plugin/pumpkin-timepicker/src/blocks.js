export default function (editor, opt = {}) {
    const c = opt;
    let bm = editor.BlockManager;
    bm.add(c.inputType, {
        label: `
        <svg t="1601027168440" class="gjs-block-svg" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2921" width="54" height="54"><path class="gjs-block-svg-path" d="M582.892308 456.861538c-55.138462 0-31.507692 70.892308-102.4 78.769231l-23.63077 7.876923c-31.507692 7.876923-39.384615 7.876923-39.384615 31.507693 0 23.630769 15.753846 31.507692 23.630769 31.507692h78.769231v220.553846c0 31.507692 7.876923 55.138462 39.384615 55.138462s39.384615-23.630769 39.384616-55.138462V496.246154c7.876923-31.507692 0-39.384615-15.753846-39.384616zM315.076923 228.430769h15.753846c23.630769 0 31.507692-15.753846 31.507693-31.507692V31.507692c0-15.753846-15.753846-31.507692-31.507693-31.507692H315.076923c-23.630769 0-31.507692 15.753846-31.507692 31.507692v173.292308c0 15.753846 7.876923 23.630769 31.507692 23.630769z m441.107692 0h15.753847c23.630769 0 31.507692-15.753846 31.507692-31.507692V31.507692c0-23.630769-15.753846-31.507692-31.507692-31.507692h-15.753847c-15.753846 0-31.507692 15.753846-31.507692 31.507692v173.292308c0 15.753846 23.630769 23.630769 31.507692 23.630769zM953.107692 78.769231H866.461538v63.015384h86.646154c39.384615 0 78.769231 31.507692 78.769231 70.892308v70.892308H63.015385v-63.015385c0-39.384615 31.507692-70.892308 78.76923-70.892308h86.646154V78.769231h-78.769231C63.015385 78.769231 0 149.661538 0 220.553846v653.784616c0 78.769231 63.015385 149.661538 141.784615 149.661538h811.323077c78.769231 0 141.784615-63.015385 141.784616-141.784615V220.553846c0-70.892308-63.015385-141.784615-141.784616-141.784615z m0 874.338461H141.784615c-39.384615 0-78.769231-31.507692-78.76923-70.892307V354.461538H1024v519.876924c7.876923 47.261538-23.630769 78.769231-70.892308 78.76923zM409.6 78.769231h275.692308v63.015384H409.6V78.769231z" fill="#ffffff" p-id="2922"></path></svg>
        <div class="gjs-block-label">${c.labelName}</div>`,
        category: c.category,
        content: `<div class="${c.labelPfx}-container gjs-block-label" data-gjs-type="${c.inputType}"></div>`
    });
}