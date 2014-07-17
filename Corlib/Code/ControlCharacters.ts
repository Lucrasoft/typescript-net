module System
{
	class ControlCharacters {
        Intr: number = 0;
        Quit: number = 1;
        Erase: number = 2;
        Kill: number = 3;
        EOF: number = 4;
        Time: number = 5;
        Min: number = 6;
        SWTC: number = 7;
        Start: number = 8;
        Stop: number = 9;
        Susp: number = 10;
        EOL: number = 11;
        Reprint: number = 12;
        Discard: number = 13;
        WErase: number = 14;
        LNext: number = 15;
        EOL2: number = 16;
	}

    System.Type.registerClass(ControlCharacters, "System.ControlCharacters");

} 