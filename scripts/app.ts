namespace VSCodeTypeScriptLiteBoilerplate {

    export class App {

        constructor (message?: string) {
            this.init(message);
        }

        init(message?: string): void {
            this.showMessage(
                message || "Default Hello World!",
                "appContainer");
        }

        private showMessage(message:string, elementId: string): void {
            document.getElementById(elementId).innerText = message;
            console && console.debug(message);
        }

    }

    window.addEventListener("load", function () {
        var app = new App("Hello TypeScript World !         !       !      !    !   !  ! !!");
    })    

}