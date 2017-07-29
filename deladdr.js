/**
 * Created by 韩吉鑫 on 2017/7/29.
 */
(function () {
    function DELADDR(url,parm) {
        this.url=url;
        this.parm=parm;
        this.loadData();

    }
    DELADDR.prototype.loadData=function () {
        $.get(this.url,this.parm,function (result) {
            console.log(result);
        })
    }
window.DELADDR=DELADDR;
})();