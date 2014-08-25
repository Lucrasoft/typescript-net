//todo

module System.Net
{
	
	class HttpStateCache
	{
		private static MAX_SIZE: number = 30; //readonly

        private _states: Stack;
        private _currentSize: number;

        //internal HttpStateCache()
		//{
        //    _states = new Stack(20);
        //}

		//internal HttpState GetHttpState()
		//{
        //    lock(this)
		//	{
        //        if (_states.Count > 0)
		//			return (HttpState) _states.Pop();
        //    }
        //    return new HttpState();
        //}

		//internal void ReleaseHttpState(HttpState state)
		//{
        //    lock(this)
		//	{
        //        if (_states.Count < MAX_SIZE)
        //        {
        //            state.clear();
        //            _states.Push(state);
        //        }
        //    }
		//}
	}
}