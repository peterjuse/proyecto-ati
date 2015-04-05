(function($){
	$.child = function(type){
		var newchild = $(document.createElement(type));
		return newchild;
	};

	$.relativeTime = function(date){
		var before = moment(date, 'YYYY-MM-DD HH:mm');
		return before.twitterLong();
	};

	$.fn.newElement = function(template, data){
		var element;
		var n, m, params, field, attr;
				
		n = data.length;
		
		for(var i=0; i<n; ++i){
			element = $.child(template.type).addClass(template.class);
			
			// Agregando atributos:
			m = template.attr.length;
			for(var j=0; j<m; ++j){
				params = template.attr[j].value.match(/\+\w+\+/g);
				
				attr = template.attr[j].value;
				if(params){
					for(var k=0; k<params.length; ++k){
						field = params[k].replace(/\+/g, '');
						attr = attr.replace(params[k], data[i][field]);
					}
				}			
				element.attr(template.attr[j].type, attr);
			}

			//Agregando valor:
			if(template.value){
				if(template.value.field){
					if(template.value.type == 'date')
						element.text($.relativeTime(data[i]));
					if(template.value.type == 'text')
						element.text(data[i]);
				}else //template.value.value
					element.text(template.value.value);
			}

			//Hijos:
			m = template.childs.length;
			for(var j=0; j<m; ++j){
				field = template.childs[j]['value']['field'];
				params = !data[i][field] ? [data[i]] :
						(typeof data[i][field] == 'object' ? data[i][field] : [data[i][field]]);				 
				element.newElement(template.childs[j], params);
			}
			$(this).append(element);
		}
	};

	$.fn.feed = function(container, template, callback, data){
		var batch = callback(container.page, container.quantity, data);
		//console.log(batch);		
		n = batch.length;
	
			$(this).newElement(template, batch);
		
		

		++container.page;
		
		//return $(this);
	};
}(jQuery));