module System.Net {
	enum ConnectionModes {
    Single = 0,
    Persistent = 1,
    Pipeline = 2,
    Mux = 3,
    }

    System.Type.registerEnum(ConnectionModes, "System.Net.ConnectionModes");

}