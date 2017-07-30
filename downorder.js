/**
 * Created by 韩吉鑫 on 2017/7/28.
 */
//下订单
(function () {
    function DOWNORDER(url,parm,superview,callback) {
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.callback=callback;
        this.loadData();
    }

    DOWNORDER.prototype.loadData=function () {

        var self=this;


        // $.post(this.url+"?token=f6778eeeb5eb4fb329c24593710760c4",function (result) {
        //     console.log(result);
        // });
    }


    DOWNORDER.prototype.creatview=function (result) {

    }

    window.DOWNORDER=DOWNORDER;
})();