/**
 * Created by pmcc on 2017/3/29.
 */

//tab页
function addTab(title, url){
    if ($('#n-tab-wrapper').tabs('exists', title)){
        $('#n-tab-wrapper').tabs('select', title);
    } else {
        var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
        $('#n-tab-wrapper').tabs('add',{
            title:title,
            content:content,
            closable:true
        });
    }
}