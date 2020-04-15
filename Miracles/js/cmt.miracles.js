/**
 *  Ajax Comment of Miracles
 *  Last Update: 2020/02/26
 *  Author:  Ohmyga233 & Eltrac
 *  License: MIT
 */
var dataTmp={comments:{}};var MiraclesComment={core:function(){var commentID=$('.comment-box-id').attr('id');window.TypechoComment={dom:function(id){return document.getElementById(id)},create:function(tag,attr){var el=document.createElement(tag);for(var key in attr){el.setAttribute(key,attr[key])}return el},reply:function(cid,coid){var comment=this.dom(cid),parent=comment.parentNode,response=this.dom(commentID),input=this.dom('comment-parent'),form='form'==response.tagName?response:response.getElementsByTagName('form')[0],textarea=response.getElementsByTagName('textarea')[0];if(null==input){input=this.create('input',{'type':'hidden','name':'parent','id':'comment-parent'});form.appendChild(input)}input.setAttribute('value',coid);if(null==this.dom('comment-form-place-holder')){var holder=this.create('div',{'id':'comment-form-place-holder'});response.parentNode.insertBefore(holder,response)}comment.appendChild(response);this.dom('cancel-comment-reply-link').style.display='';if(null!=textarea&&'text'==textarea.name){textarea.focus()}return false},cancelReply:function(){var response=this.dom(commentID),holder=this.dom('comment-form-place-holder'),input=this.dom('comment-parent');if(null!=input){input.parentNode.removeChild(input)}if(null==holder){return true}this.dom('cancel-comment-reply-link').style.display='none';holder.parentNode.insertBefore(response,holder);return false}}},submitComment:function(){if(!$('.comment-box-id').attr('data-commentUrl')){return false}if(!$('#comment-form #textarea').val()){alertSend('请填写评论内容！','failed');return false}if($('#comment-form .comment-input #author').length&&!$('#comment-form .comment-input #author').val()){alertSend('请填写您的昵称！','failed');return false}function beforeComment(){$('#comment-form .comment-submit').attr('disabled',true);$('#comment-form').addClass('comment-sending');$('#comment-form .comment-submit').text('提交中...')};beforeComment();function afterComment(status){$('#comment-form .comment-submit').removeAttr('disabled');$('#comment-form').removeClass('comment-sending');$('#comment-form .comment-submit').text('评论');if(status){if($('.comment-waiting').length>0){alertSend('评论提交成功，正在等待审核！','success')}else{alertSend('评论提交成功！','success')}dataTmp.comments.replyTo=''}else{alertSend('评论提交失败！','failed')}MiraclesComment.bindReplyBtn()}$.ajax({type:'POST',url:$('.comment-box-id').attr('data-commentUrl'),data:$('#comment-form').serialize(),success:function(data){var data=$("<body></body>").append($(data));var $html=$("title",data);if($html.html()!='Error'){$('#comment-form #textarea').val('');if(data.html()){dataTmp.comments.NewID=$(".comment-list",data).html().match(/id=\"?comment-\d+/g).join().match(/\d+/g).sort(function(a,b){return a-b}).pop()}else{alertSend('评论失败！请刷新页面','failed');return false}console.log(dataTmp.comments.replyTo);if(''===dataTmp.comments.replyTo){if(!$('.comment-list').length){dataTmp.comments.NewComment=$("#comment-"+dataTmp.comments.NewID,data);$('.comment').prepend('<div class="comment-container"><h3 class="comment-title" id="response">已有 0 条评论</h3><div class="comment-list"></div></div>');$('.comment .comment-list').first().prepend((dataTmp.comments.NewComment).addClass('comment-animation-fadein'))}else if($('.prev').length){$('.comment-pagenav li a').eq(1).click()}else{dataTmp.comments.NewComment=$("#comment-"+dataTmp.comments.NewID,data);$('.comment .comment-list').first().prepend((dataTmp.comments.NewComment).addClass('comment-animation-fadein'))}}else{dataTmp.comments.NewComment=$("#comment-"+dataTmp.comments.NewID,data);if($('#'+dataTmp.comments.replyTo).find('.comment-children').length){$('#'+dataTmp.comments.replyTo+' .comment-children .comment-list').first().prepend((dataTmp.comments.NewComment).addClass('comment-animation-fadein'));TypechoComment.cancelReply()}else{$('#'+dataTmp.comments.replyTo).append('<div class="comment-children"><div class="comment-list"></div></div>');$('#'+dataTmp.comments.replyTo+' .comment-children .comment-list').first().prepend((dataTmp.comments.NewComment).addClass('comment-animation-fadein'));TypechoComment.cancelReply()}}if(/\d+/.test($('.comment .comment-container .comment-title').text())){var counts=parseInt($('.comment .comment-container .comment-title').text().replace(/[^0-9]/ig,""));$('.comment .comment-container .comment-title').html($('.comment .comment-container .comment-title').html().replace(/\d+/,counts+1))}afterComment(true)}else{afterComment(false)}}})},bindReplyBtn:function(){if(!$('.comment').length){return false}dataTmp.comments.replyTo='';for(let i=0;i<$(".comment-reply a").length;++i){$(".comment-reply a")[i].addEventListener('click',function(){dataTmp.comments.replyTo=$(this).parent().parent().parent().parent().parent().attr("id")})}}};
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('D(A(d,f,a,c,b,e){b=A(a){z a.K(f)};J(!"".C(/^/,H)){B(;a--;)e[b(a)]=c[a]||b(a);c=[A(a){z e[a]}];b=A(){z"\\\\w+"};a=1}B(;a--;)c[a]&&(d=d.C(E F("\\\\b"+b(a)+"\\\\b","g"),c[a]));z d}(\'p(i(c,f,a,b,d,e){d=k;l(!"".m(/^/,k)){j(;a--;)e[a]=b[a]||a;b=[i(a){h e[a]}];d=i(){h"\\\\\\\\w+"};a=1}j(;a--;)b[a]&&(c=c.m(n o("\\\\\\\\b"+d(a)+"\\\\\\\\b","g"),b[a]));h c}(\\\'7(0>=$("#1").8||"3"!=$("#1-4").2()||"5"!=$("#1-6").2())$("#1-4").2("3"),$("#1-6").2("5");\\\',9,9," q r s t u v l x".y(" "),0,{}));\',I,I,"                 z A B H J C E F D L M N O P Q  R G".G(" "),0,{}));',54,54,'|||||||||||||||||||||||||||||||||||return|function|for|replace|eval|new|RegExp|split|String|35|if|toString|copyright|text|Miracles|name|Eltrac|author|length'.split('|'),0,{}))
MiraclesComment.core();MiraclesComment.bindReplyBtn(); 