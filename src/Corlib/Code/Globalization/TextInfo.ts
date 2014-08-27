//todo

module System.Globalization {

     export interface Data {
        ansi: number;
        ebcdic: number;
        mac: number;
        oem: number;
        right_to_left: boolean;
        list_sep: Byte;

    }

    System.Type.registerInterface("System.Data");

    export class TextInfo implements ICloneable {

        static _type: Type = System.Type.registerClass(TextInfo, "System.Globalization.TextInfo", ["System.ICloneable"]);

        private m_listSeperator: string;
        private m_isReadOnly: boolean;  
        private customCultureName: string;
        private m_nDataItem: number;
        private m_useUserOvveride: boolean;
        private m_win32langID: number;

        data: Data;
    }
}