module System.IO{
    enum FileAction{
        Added = 1,
        removed = 2,
        modified = 3,
        RenamedOldName = 4,
        RenamedNewName = 5       
    }

    System.Type.registerEnum(FileAction, "System.IO.FileAction");    
}