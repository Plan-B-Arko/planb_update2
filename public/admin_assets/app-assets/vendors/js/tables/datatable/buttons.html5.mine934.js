!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],(function(e){return t(e,window,document)})):"object"==typeof exports?module.exports=function(e,o,l,n){return e||(e=window),o&&o.fn.dataTable||(o=require("datatables.net")(e,o).$),o.fn.dataTable.Buttons||require("datatables.net-buttons")(e,o),t(o,e,e.document,l,n)}:t(jQuery,window,document)}((function(t,e,o,l,n,r){function a(t){for(var e="";0<=t;)e=String.fromCharCode(t%26+65)+e,t=Math.floor(t/26)-1;return e}function p(o,l){I===r&&(I=-1===F.serializeToString((new e.DOMParser).parseFromString(x["xl/worksheets/sheet1.xml"],"text/xml")).indexOf("xmlns:r")),t.each(l,(function(e,l){if(t.isPlainObject(l))p(e=o.folder(e),l);else{if(I){var n,r=l.childNodes[0],a=[];for(n=r.attributes.length-1;0<=n;n--){var d=r.attributes[n].nodeName,i=r.attributes[n].nodeValue;-1!==d.indexOf(":")&&(a.push({name:d,value:i}),r.removeAttribute(d))}for(n=0,d=a.length;n<d;n++)(i=l.createAttribute(a[n].name.replace(":","_dt_b_namespace_token_"))).value=a[n].value,r.setAttributeNode(i)}l=F.serializeToString(l),I&&(-1===l.indexOf("<?xml")&&(l='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+l),l=(l=l.replace(/_dt_b_namespace_token_/g,":")).replace(/xmlns:NS[\d]+="" NS[\d]+:/g,"")),l=l.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>"),o.file(e,l)}}))}function d(e,o,l){var n=e.createElement(o);return l&&(l.attr&&t(n).attr(l.attr),l.children&&t.each(l.children,(function(t,e){n.appendChild(e)})),null!==l.text&&l.text!==r&&n.appendChild(e.createTextNode(l.text))),n}function i(t,e){var o=t.header[e].length;t.footer&&t.footer[e].length>o&&(o=t.footer[e].length);for(var l=0,n=t.body.length;l<n;l++){var a=t.body[l][e];if(-1!==(a=null!==a&&a!==r?a.toString():"").indexOf("\n")?((a=a.split("\n")).sort((function(t,e){return e.length-t.length})),a=a[0].length):a=a.length,a>o&&(o=a),40<o)return 54}return 6<(o*=1.35)?o:6}var s=t.fn.dataTable;s.Buttons.pdfMake=function(t){if(!t)return n||e.pdfMake;n=t},s.Buttons.jszip=function(t){if(!t)return l||e.JSZip;l=t};var f=function(t){if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in e,l=/constructor/i.test(t.HTMLElement)||t.safari,n=/CriOS\/[\d]+/.test(navigator.userAgent),r=function(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)},a=function(e){setTimeout((function(){"string"==typeof e?(t.URL||t.webkitURL||t).revokeObjectURL(e):e.remove()}),4e4)},p=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},d=function(d,i,s){s||(d=p(d));var f=this,m="application/octet-stream"===d.type,y=function(){for(var t=["writestart","progress","write","writeend"],e=(t=[].concat(t)).length;e--;){var o=f["on"+t[e]];if("function"==typeof o)try{o.call(f,f)}catch(t){r(t)}}};if(f.readyState=f.INIT,o){var u=(t.URL||t.webkitURL||t).createObjectURL(d);setTimeout((function(){e.href=u,e.download=i;var t=new MouseEvent("click");e.dispatchEvent(t),y(),a(u),f.readyState=f.DONE}))}else!function(){if((n||m&&l)&&t.FileReader){var e=new FileReader;e.onloadend=function(){var o=n?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(o,"_blank")||(t.location.href=o),f.readyState=f.DONE,y()},e.readAsDataURL(d),f.readyState=f.INIT}else u||(u=(t.URL||t.webkitURL||t).createObjectURL(d)),m?t.location.href=u:t.open(u,"_blank")||(t.location.href=u),f.readyState=f.DONE,y(),a(u)}()},i=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,o){return e=e||t.name||"download",o||(t=p(t)),navigator.msSaveOrOpenBlob(t,e)}:(i.abort=function(){},i.readyState=i.INIT=0,i.WRITING=1,i.DONE=2,i.error=i.onwritestart=i.onprogress=i.onwrite=i.onabort=i.onerror=i.onwriteend=null,function(t,e,o){return new d(t,e||t.name||"download",o)})}}("undefined"!=typeof self&&self||void 0!==e&&e||this.content);s.fileSave=f;var m=function(t){var e="Sheet1";return t.sheetName&&(e=t.sheetName.replace(/[\[\]\*\/\\\?:]/g,"")),e},y=function(t){return t.newline?t.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},u=function(t,e){var o=y(e);t=t.buttons.exportData(e.exportOptions);var l=e.fieldBoundary,n=e.fieldSeparator,a=new RegExp(l,"g"),p=e.escapeChar!==r?e.escapeChar:"\\",d=function(t){for(var e="",o=0,r=t.length;o<r;o++)0<o&&(e+=n),e+=l?l+(""+t[o]).replace(a,p+l)+l:t[o];return e},i=e.header?d(t.header)+o:"";e=e.footer&&t.footer?o+d(t.footer):"";for(var s=[],f=0,m=t.body.length;f<m;f++)s.push(d(t.body[f]));return{str:i+s.join(o)+e,rows:s.length}},c=function(){if(-1===navigator.userAgent.indexOf("Safari")||-1!==navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Opera"))return!1;var t=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return!!(t&&1<t.length&&603.1>1*t[1])};try{var I,F=new XMLSerializer}catch(t){}var x={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},h=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^[\d]{4}\-[\d]{2}\-[\d]{2}$/,style:67,fmt:function(t){return Math.round(25569+Date.parse(t)/864e5)}}];return s.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(t){return t.i18n("buttons.copy","Copy")},action:function(e,l,n,r){this.processing(!0);var a=this;e=u(l,r);var p=l.buttons.exportInfo(r),d=y(r),i=e.str;if(n=t("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0}),p.title&&(i=p.title+d+d+i),p.messageTop&&(i=p.messageTop+d+d+i),p.messageBottom&&(i=i+d+d+p.messageBottom),r.customize&&(i=r.customize(i,r,l)),r=t("<textarea readonly/>").val(i).appendTo(n),o.queryCommandSupported("copy")){n.appendTo(l.table().container()),r[0].focus(),r[0].select();try{var s=o.execCommand("copy");if(n.remove(),s)return l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),l.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},e.rows),2e3),void this.processing(!1)}catch(t){}}s=t("<span>"+l.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(n),l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),s,0),r[0].focus(),r[0].select();var f=t(s).closest(".dt-button-info"),m=function(){f.off("click.buttons-copy"),t(o).off(".buttons-copy"),l.buttons.info(!1)};f.on("click.buttons-copy",m),t(o).on("keydown.buttons-copy",(function(t){27===t.keyCode&&(m(),a.processing(!1))})).on("copy.buttons-copy cut.buttons-copy",(function(){m(),a.processing(!1)}))},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},s.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return e.FileReader!==r&&e.Blob},text:function(t){return t.i18n("buttons.csv","CSV")},action:function(t,e,l,n){this.processing(!0),t=u(e,n).str,l=e.buttons.exportInfo(n);var r=n.charset;n.customize&&(t=n.customize(t,n,e)),!1!==r?(r||(r=o.characterSet||o.charset),r&&(r=";charset="+r)):r="",n.bom&&(t="\ufeff"+t),f(new Blob([t],{type:"text/csv"+r}),l.filename,!0),this.processing(!1)},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},s.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return e.FileReader!==r&&(l||e.JSZip)!==r&&!c()&&F},text:function(t){return t.i18n("buttons.excel","Excel")},action:function(o,n,s,y){this.processing(!0);var u=this,c=0,I=(o=function(e){return t.parseXML(x[e])})("xl/worksheets/sheet1.xml"),F=I.getElementsByTagName("sheetData")[0];o={_rels:{".rels":o("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":o("xl/_rels/workbook.xml.rels")},"workbook.xml":o("xl/workbook.xml"),"styles.xml":o("xl/styles.xml"),worksheets:{"sheet1.xml":I}},"[Content_Types].xml":o("[Content_Types].xml")};var b,g,v=n.buttons.exportData(y.exportOptions),B=function(e){g=d(I,"row",{attr:{r:b=c+1}});for(var o=0,l=e.length;o<l;o++){var n=a(o)+""+b,p=null;if(null===e[o]||e[o]===r||""===e[o]){if(!0!==y.createEmptyCells)continue;e[o]=""}var i=e[o];e[o]=t.trim(e[o]);for(var s=0,f=h.length;s<f;s++){var m=h[s];if(e[o].match&&!e[o].match(/^0\d+/)&&e[o].match(m.match)){p=e[o].replace(/[^\d\.\-]/g,""),m.fmt&&(p=m.fmt(p)),p=d(I,"c",{attr:{r:n,s:m.style},children:[d(I,"v",{text:p})]});break}}p||("number"==typeof e[o]||e[o].match&&e[o].match(/^-?\d+(\.\d+)?$/)&&!e[o].match(/^0\d+/)?p=d(I,"c",{attr:{t:"n",r:n},children:[d(I,"v",{text:e[o]})]}):(i=i.replace?i.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):i,p=d(I,"c",{attr:{t:"inlineStr",r:n},children:{row:d(I,"is",{children:{row:d(I,"t",{text:i,attr:{"xml:space":"preserve"}})}})}}))),g.appendChild(p)}F.appendChild(g),c++};y.customizeData&&y.customizeData(v);var w=function(e,o){var l=t("mergeCells",I);l[0].appendChild(d(I,"mergeCell",{attr:{ref:"A"+e+":"+a(o)+e}})),l.attr("count",parseFloat(l.attr("count"))+1),t("row:eq("+(e-1)+") c",I).attr("s","51")},C=n.buttons.exportInfo(y);C.title&&(B([C.title],c),w(c,v.header.length-1)),C.messageTop&&(B([C.messageTop],c),w(c,v.header.length-1)),y.header&&(B(v.header,c),t("row:last c",I).attr("s","2")),s=c;for(var k=0,T=v.body.length;k<T;k++)B(v.body[k],c);for(k=c,y.footer&&v.footer&&(B(v.footer,c),t("row:last c",I).attr("s","2")),C.messageBottom&&(B([C.messageBottom],c),w(c,v.header.length-1)),B=d(I,"cols"),t("worksheet",I).prepend(B),w=0,T=v.header.length;w<T;w++)B.appendChild(d(I,"col",{attr:{min:w+1,max:w+1,width:i(v,w),customWidth:1}}));B=o.xl["workbook.xml"],t("sheets sheet",B).attr("name",m(y)),y.autoFilter&&(t("mergeCells",I).before(d(I,"autoFilter",{attr:{ref:"A"+s+":"+a(v.header.length-1)+k}})),t("definedNames",B).append(d(B,"definedName",{attr:{name:"_xlnm._FilterDatabase",localSheetId:"0",hidden:1},text:m(y)+"!$A$"+s+":"+a(v.header.length-1)+k}))),y.customize&&y.customize(o,y,n),0===t("mergeCells",I).children().length&&t("mergeCells",I).remove(),s={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},p(n=new(l||e.JSZip),o),n.generateAsync?n.generateAsync(s).then((function(t){f(t,C.filename),u.processing(!1)})):(f(n.generate(s),C.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1,autoFilter:!1,sheetName:""},s.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return e.FileReader!==r&&(n||e.pdfMake)},text:function(t){return t.i18n("buttons.pdf","PDF")},action:function(o,l,a,p){this.processing(!0),a=l.buttons.exportData(p.exportOptions),o=l.buttons.exportInfo(p);var d=[];p.header&&d.push(t.map(a.header,(function(t){return{text:"string"==typeof t?t:t+"",style:"tableHeader"}})));for(var i=0,s=a.body.length;i<s;i++)d.push(t.map(a.body[i],(function(t){return null!==t&&t!==r||(t=""),{text:"string"==typeof t?t:t+"",style:i%2?"tableBodyEven":"tableBodyOdd"}})));p.footer&&a.footer&&d.push(t.map(a.footer,(function(t){return{text:"string"==typeof t?t:t+"",style:"tableFooter"}}))),a={pageSize:p.pageSize,pageOrientation:p.orientation,content:[{table:{headerRows:1,body:d},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}},o.messageTop&&a.content.unshift({text:o.messageTop,style:"message",margin:[0,0,0,12]}),o.messageBottom&&a.content.push({text:o.messageBottom,style:"message",margin:[0,0,0,12]}),o.title&&a.content.unshift({text:o.title,style:"title",margin:[0,0,0,12]}),p.customize&&p.customize(a,p,l),l=(n||e.pdfMake).createPdf(a),"open"!==p.download||c()?l.download(o.filename):l.open(),this.processing(!1)},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"},s.Buttons}));
