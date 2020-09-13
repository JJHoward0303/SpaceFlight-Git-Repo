/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
/// <reference path="../../node_modules/knockout/build/output/knockout-latest.js" />
/// <reference path="../../node_modules/@types/node/index.d.ts" />
namespace sf365.checkin
{

    class CheckInViewModel
    {
        isbusy: KnockoutObservable<boolean>;
        constructor()
        {
            this.isbusy = ko.observable(false);


        }
        public foo()
        {
            alert("bar");
        }
    }

}