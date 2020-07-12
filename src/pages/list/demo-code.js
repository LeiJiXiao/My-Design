const dialogDemoCode1 = '<template>\n' +
        '    <Dialog title="提示"\n' +
        '            :visible.sync="dialogVisible"\n' +
        '    >\n' +
        '        <span>显示默认对话框!!</span>\n' +
        '    </Dialog>\n' +
        '</template>\n' +
        '\n' +
        '<script>\n' +
        '    export default {\n' +
        '        data() {\n' +
        '            return {\n' +
        '                dialogVisible: false\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '</script>\n' +
        '\n' +
        '<style scope>\n' +
        '    \n' +
        '</style>';

const dialogDemoCode2 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible"\n' +
    '    >\n' +
    '        <span>显示自定义页脚对话框!!</span>\n' +
    '        <div class="dialog-footer" slot="footer" style="text-align: center">\n' +
    '            自定义footer\n' +
    '        </div>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const dialogDemoCode3 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible"\n' +
    '            width="80%"\n' +
    '            height="180px"\n' +
    '    >\n' +
    '        <span>宽：80%， 高:180px</span>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const dialogDemoCode4 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible4"\n' +
    '            cancelBtnText="cancel"\n' +
    '            confirmBtnText="confirm"\n' +
    '    >\n' +
    '        <span>显示自定义按钮文字对话框</span>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

export {
    dialogDemoCode1,
    dialogDemoCode2,
    dialogDemoCode3,
    dialogDemoCode4
}