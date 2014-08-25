module System.Net
{
	export class TransportContext
    {
        static _type: Type = System.Type.registerClass(TransportContext, "System.Net.TransportContext");

		export GetChannelBinding(kind: ChannelBindingKind): ChannelBinding;
	}
}
