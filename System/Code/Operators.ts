

//ts, js has no built-in operators overloading 
//idea is to 'define' the operators inside system.
//so there is one central place where operator-convention is used.

//C# :  Point P = new Point(1,1) + new Point(3,3)

//TS :  var P: Point = System.Operators.Add<Point>( new Point(1,1), new Point(3,3));

//TS :  var so = System.Operators
//TS :  var P: Point = so.Add<Point>( new Point(1,1), new Point(3,3));


module System {

    export class Operators {

        static Add<T extends System.Object>(T1: T, T2: System.Object) : T {
            //
            return null;
        }

    }

}