/// <reference path="../Interfaces/IEnumerator.ts"/>
/// <reference path="../Exceptions/InvalidOperationException.ts"/>
/// <reference path="StringInfo.ts"/>

module System.Globalization {

    export class TextElementEnumerator extends System.Object implements IEnumerator<TextElementEnumerator> {

        private index: number;
        private elementindex: number;
        private startpos: number;
        private str: string;
        private element: string;

        static _type: Type = System.Type.registerClass(TextElementEnumerator, "System.Globalization.TextElementEnumerator", []);

        constructor(str: string, startpos: number) {
            super();
            this.index = -1;
            this.startpos = startpos;
            this.str = str.substr(startpos);
            this.element = null;
        }

        get current(): Object {

            if (this.element == null) {
                throw new InvalidOperationException();
            }

            return this.element;
        }

        get elementIndex(): number {

            if (this.element == null) {
                throw new InvalidOperationException();
            }

            return (this.elementindex + this.startpos);
        }

        get getTextElement(): string {

            if (this.element == null) {
                throw new InvalidOperationException;
            }

            return (this.element);
        }

        moveNext(): boolean {

            this.elementindex = this.index + 1;

            //TODO: Create StringInfo.ts
            if (this.elementindex < this.str.length) {
                this.element = StringInfo.getNextTextElement(this.str, this.elementindex);
                this.index += this.element.length;

                return true;
            } else {
                this.element = null;

                return false;
            }
        }

        reset() {
            this.element = null;
            this.index = -1;
        }
    }
}