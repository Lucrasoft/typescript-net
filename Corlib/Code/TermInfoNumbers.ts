module System {
	enum TermInfoNumbers {
		Columns,		// 0
		InitTabs,
		Lines,
		LinesOfMemory,
		MagicCookieGlitch,
		PaddingBaudRate,
		VirtualTerminal,
		WidthStatusLine,
		NumLabels,
		LabelHeight,
		LabelWidth,
		MaxAttributes,
		MaximumWindows,
		MaxColors,
		MaxPairs,
		NoColorVideo,
		BufferCapacity,
		DotVertSpacing,
		DotHorzSpacing,
		MaxMicroAddress,
		MaxMicroJump,
		MicroColSize,
		MicroLineSize,
		NumberOfPins,
		OutputResChar,
		OutputResLine,
		OutputResHorzInch,
		OutputResVertInch,
		PrintRate,
		WideCharSize,
		Buttons,
		BitImageEntwining,
		BitImageType,		// 32
		Last
    }

    System.Type.registerEnum(TermInfoNumbers, "System.TermInfoNumbers");

}