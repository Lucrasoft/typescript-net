module System.Net
{
	export class TransportContext
    {
        static _type: Type = System.Type.registerClass(TransportContext, "System.Net.TransportContext");

		public GetChannelBinding(kind: ChannelBindingKind): ChannelBinding;
	}
}
