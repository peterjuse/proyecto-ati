$(document).ready(function(){
	var pastie = {
		'type': 'div',
		'attr': [{'type': 'id', 'value': 'pastie-summary-+id+'}],
		'class': 'pastie',
		'value': {},
		'childs':[
			{
				'type': 'div',
				'attr': [],
				'class': 'pastie-main media',
				'value': {},
				'childs':[
					{
						'type': 'div',
						'attr': [],
						'class': 'pastie-user-image media-left',
						'value': {},
						'childs':[
							{
								'type': 'a',
								'attr': [{'type': 'href', 'value': 'user.html'}],
								'class': '',
								'value': {},
								'childs':[
									{
										'type': 'img',
										'attr': [{'type': 'width', 'value': '48'}, {'type': 'height', 'value': '48'}],
										'class': 'media-object avatar',
										'value': {'type': 'avatar', 'field': 'avatar'},
										'childs':[]
									}
								]
							}
						]
					},
					{
						'type': 'div',
						'attr': [],
						'class': 'media-body',
						'value': {},
						'childs':[
							{
								'type': 'div',
								'attr': [],
								'class': 'media-heading',
								'value': {},
								'childs':[
									{
										'type': 'strong',
										'attr': [],
										'class': 'pastie-owner',
										'value': {},
										'childs':[
											{
												'type': 'a',
												'attr': [{'type': 'href', 'value': 'user.html'}],
												'class': '',
												'value': {'type': 'text', 'field': 'owner'},
												'childs':[]
											}
										]
									},
									{
										'type': 'small',
										'attr': [],
										'class': 'small-text',
										'value': {},
										'childs':[
											{
												'type': 'span',
												'attr': [],
												'class': 'pastie-username',
												'value': {},
												'childs':[
													{
														'type': 'span',
														'attr': [],
														'class': '',
														'value': {'type': 'text', 'value': '@'},
														'childs':[]
													},
													{
														'type': 'span',
														'attr': [],
														'class': '',
														'value': {'type': 'text', 'field': 'username'},
														'childs':[]
													}
												]
											},
											{
												'type': 'span',
												'attr': [],
												'class': 'separator',
												'value': {'type': 'text', 'value': '-'},
												'childs':[]
											},
											{
												'type': 'span',
												'attr': [],
												'class': 'pastie-status',
												'value': {},
												'childs':[
													{
														'type': 'span',
														'attr': [],
														'class': '',
														'value': {'type': 'text', 'field': 'status'},
														'childs':[]
													},
													{
														'type': 'span',
														'attr': [],
														'class': '',
														'value': {'type': 'date', 'field': 'date'},
														'childs':[]
													}
												]
											}
										]
									}
								]
							},
							{
								'type': 'p',
								'attr': [],
								'class': 'pastie-content text-justify',
								'value': {'type': 'text', 'field': 'content'},
								'childs':[]
							},
							{
								'type': 'div',
								'attr': [],
								'class': 'pastie-footer row',
								'value': {},
								'childs':[
									{
										'type': 'div',
										'attr': [],
										'class': 'pastie-tags col-sm-9',
										'value': {},
										'childs':[
											{
												'type': 'a',
												'attr': [],
												'class': 'pastie-tag',
												'value': {'type': 'array', 'field': 'tags'},
												'childs':[
													{
														'type': 'span',
														'attr': [],
														'class': '',
														'value': {'type': 'text', 'field': 'name'},
														'childs':[]
													}
												]
											}
										]
									},
									{
										'type': 'div',
										'attr': [],
										'class': 'pastie-options col-sm-3',
										'value': {},
										'childs':[
											{
												'type': 'div',
												'attr': [],
												'class': 'pastie-expand pull-right',
												'value': {},
												'childs': [
													{
														'type': 'a',
														'attr': [{'type': 'href', 'value': '#pastie-panel-modal'}],
														'class': 'expand-pastie-btn',
														'value': {},
														'childs':[
															{
																'type': 'i',
																'attr': [],
																'class': 'fa fa-expand fa-fw',
																'value': {},
																'childs':[]
															}
														]
													}
												]
											},
											{
												'type': 'div',
												'attr': [{'type': 'id', 'value': 'pastie-settings-+id+'}],
												'class': 'dropup pastie-settings',
												'value': {},
												'childs': [
													{
														'type': 'a',
														'attr': [{'type': 'id', 'value': 'pastie-settings-dropdown-+id+'}, {'type': 'data-toggle', 'value': 'dropdown'}, {'type': 'aria-expanded', 'value': 'false'}, {'type': 'aria-haspopup', 'value': 'true'}],
														'class': 'dropdown-toggle',
														'value': {},
														'childs': [
															{
																'type': 'i',
																'attr': [{'type': 'title', 'value': 'Más'}, {'type': 'data-toggle', 'value': 'tooltip'}, {'type': 'data-placement', 'value': 'left'}],
																'class': 'glyphicon glyphicon-option-horizontal',
																'value': {},
																'childs': []
															}
														]
													},
													{
														'type': 'ul',
														'attr': [{'type': 'role', 'value': 'menu'}, {'type': 'aria-labelledby', 'value': 'pastie-settings-dropdown-+id+'}],
														'class': 'dropdown-menu dropdown-menu-right',
														'value': {},
														'childs': [
															{
																'type': 'li',
																'attr': [{'type': 'role', 'value': 'presentation'}],
																'class': '',
																'value': {},
																'childs': [
																	{ 
																		'type': 'a',
																		'attr': [{'type': 'role', 'value': 'menuitem'}, {'type': 'tabindex', 'value': '-1'}],
																		'class': 'edit-pastie-btn',
																		'value': {},
																		'childs': [
																			{
																				'type': 'i',
																				'attr': [],
																				'class': 'glyphicon glyphicon-pencil pull-left',
																				'value': {},
																				'childs': []
																			},
																			{
																				'type': 'span',
																				'attr': [],
																				'class': '',
																				'value': {'type': 'text', 'value': 'Editar'},
																				'childs': []
																			}
																		]
																	},
																	{ 
																		'type': 'a',
																		'attr': [{'type': 'role', 'value': 'menuitem'}, {'type': 'tabindex', 'value': '-1'}],
																		'class': 'delete-pastie-btn',
																		'value': {},
																		'childs': [
																			{
																				'type': 'i',
																				'attr': [],
																				'class': 'glyphicon glyphicon-trash pull-left',
																				'value': {},
																				'childs': []
																			},
																			{
																				'type': 'span',
																				'attr': [],
																				'class': '',
																				'value': {'type': 'text', 'value': 'Eliminar'},
																				'childs': []
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}	
										]
									}
								]
							}
						]
					}
				]
			}
		]
	};
	var user = {
		'type': 'div',
		'attr': [{'type': 'id', 'value': 'user-summary-+id+'}],
		'class': 'user col-xs-6 col-md-3',
		'value': {},
		'childs': [
			{
				'type': 'div',
				'attr': [],
				'class': 'thumbnail',
				'value': {},
				'childs': [
					{
						'type': 'a',
						'attr': [{'type': 'href', 'value': 'user.html'}],
						'class': '',
						'value': {},
						'childs': [
							{
								'type': 'img',
								'attr': [{'type': 'width', 'value': '128'}, {'type': 'height', 'value': '128'}],
								'class': '',
								'value': {},
								'childs': []
							}
						]
					},
					{
						'type': 'div',
						'attr': [],
						'class': 'caption',
						'value': {},
						'childs': [
							{
								'type': 'a',
								'attr': [{'type': 'href', 'value': 'user.html'}],
								'class': '',
								'value': {},
								'childs': [
									{
										'type': 'h4',
										'attr': [],
										'class': 'user-fullname',
										'value': {},
										'childs': [
											{
												'type': 'span',
												'attr': [],
												'class': '',
												'value': {'type': 'text', 'field': 'name'},
												'childs': []
											},
											{
												'type': 'span',
												'attr': [],
												'class': '',
												'value': {'type': 'text', 'field': 'last-name'},
												'childs': []
											}
										]			
									}
								]
							},
							{
								'type': 'h5',
								'attr': [],
								'class': '',
								'value': {},
								'childs': [
									{
										'type': 'span',
										'attr': [],
										'class': '',
										'value': {'type': 'text', 'value': '@'},
										'childs': []
									},
									{
										'type': 'span',
										'attr': [],
										'class': '',
										'value': {'type': 'text', 'field': 'username'},
										'childs': []
									}
								]
							},
							{
								'type': 'div',
								'attr': [],
								'class': 'user-country',
								'value': {},
								'childs': [
									{
										'type': 'i',
										'attr': [],
										'class': 'fa fa-map-marker fa-fw pull-left',
										'value': {},
										'childs': []
									},
									{
										'type': 'span',
										'attr': [],
										'class': '',
										'value': {'type': 'text', 'field': 'country'},
										'childs': []
									}
								]
							}
						]
					}
				]
			}
		]
	};
	var tag = {
		'type': 'div',
		'attr': [{'type': 'id', 'value': 'tag-summary-+id+'}],
		'class': 'tag col-xs-6 col-md-3',
		'value': {},
		'childs': [
			{
				'type': 'div',
				'attr': [],
				'class': 'thumbnail',
				'value': {},
				'childs': [
					{
						'type': 'a',
						'attr': [{'type': 'href', 'value': 'search.html'}],
						'class': '',
						'value': {},
						'childs': [
							{
								'type': 'h3',
								'attr': [],
								'class': '',
								'value': {'type': 'text', 'field': 'name'},
								'childs': []
							}
						]
					},
					{
						'type': 'div',
						'attr': [],
						'class': 'caption',
						'value': {},
						'childs': [
							{
								'type': 'div',
								'attr': [],
								'class': 'tag-all-occurrences',
								'value': {},
								'childs': [
									{
										'type': 'i',
										'attr': [],
										'class': 'fa fa-asterisk fa-fw pull-left',
										'value': {},
										'childs': []
									},
									{
										'type': 'span',
										'attr': [],
										'class': '',
										'value': {'type': 'text', 'field': 'occurrences'},
										'childs': []
									}
								]
							},
							{
								'type': 'div',
								'attr': [],
								'class': 'tag-last-occurrence',
								'value': {},
								'childs': [
									{
										'type': 'i',
										'attr': [],
										'class': 'fa fa-calendar fa-fw pull-left',
										'value': {},
										'childs': []
									},
									{
										'type': 'span',
										'attr': [],
										'class': '',
										'value': {'type': 'date', 'field': 'last-occurrence'},
										'childs': []
									}
								]
							}
						]
					}
				]
			}
		]
	};

	/*Sección de prueba */
	var content = {
		'page': 0,
		'quantity': 2
	}
	var pasties = [
		{
			"id": 1,
		    "title" : "Dolor sit",
		    "owner": "Juan Sánchez",
		    "username": "juansanchez",
		    "avatar" : "ebf267144674006730c236056292af08",
		    "private" : true,
		    "status" : 'modificado',
		    "content" : "Lorem ipsum dolor sit amet,.",
		 	"date" : '2015-03-02 21:30',
		 	"tags" : [{"name": "lorem"}, {"name": "ipsum"}]
		},
		{
			"id" : 2,
			"title" : "Consectetur adipiscing elit",
			"owner": "Pedro Valdivieso",
			"username": "pedrovaldivieso",
			"avatar" : "160fcd03ad843e890ee620ba0e707294",
			"private" : true,
			"status" : 'creado',
			"content" : "Lorem ipsum dolor sit amet",
			"date" : '2015-01-2 13:24',
			"tags" : [{"name": "suspendisse"}]
		}
	], 
	users = [
		{
			"username" : "juansanchez",
			"email": "juan.sanchez1192@gmail.com",
			"name": "Juan",
			"last-name": "Sánchez",
			"avatar" : "ebf267144674006730c236056292af08",
			"password": "123juan",
			"country": "Venezuela"
		},
		{
			"username" : "pedrovaldivieso",
			"email": "pedro.valdivieso@gmail.com",
			"name": "Pedro",
			"last-name": "Valdivieso",
			"avatar" : "160fcd03ad843e890ee620ba0e707294",
			"password": "123pedrov",
			"country": "Venezuela"
		},
		{
			"username" : "sheremoubayyed",
			"email": "mariet.moubayyed@gmail.com",
			"name": "Sherezada",
			"last-name": "Moubayyed",
			"avatar" : "dff45f1eccd74d2bd709d61553cc5481",
			"password": "123shere",
			"country": "Venezuela"
		},
		{
			"username" : "pedroboll",
			"email": "pedro.boll22@gmail.com",
			"name": "Pedro",
			"last-name": "Boll",
			"avatar": "58916453a6149201a992c332d7306237",
			"password": "123pedrob",
			"country": "Venezuela"
		},
		{
			"username" : "josselineperdomo",
			"email": "joss.desi@gmail.com",
			"name": "Josseline",
			"last-name": "Perdomo",
			"avatar": "38e91119a43631539996debc5037eae5",
			"password": "123joss",
			"country": "Venezuela"
		},
		{
			"username" : "ybrahinmartinez",
			"email": "ybrahinmartinez11@gmail.com",
			"name": "Ybrahin",
			"last-name": "Martinez",
			"avatar": "91f381527a88444d57d7c8a32a2fc676",
			"password": "123ybrahin",
			"country": "Venezuela"
		}
	], 
	tags = [
		{
			"name": "lorem",
			"occurrences": 3,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "ipsum",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "suspendisse",
			"occurrences": 5,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "justo",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "potenti",
			"occurrences": 2,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "sodales",
			"occurrences": 2,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "aenean",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "commodo",
			"occurrences": 2,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "tristique",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "dolor",
			"occurrences": 3,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "vestibulum",
			"occurrences": 4,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "interdum",
			"occurrences": 2,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "phasellus",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "quisque",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "facilisis",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "donec",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "fringilla",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		},
		{
			"name": "pellentesque",
			"occurrences": 1,
			"last-occurrence": '2015-03-02 21:30'
		}
	];

	var navItems = $('#main-menu a');
	var tabItems = $('.tabs-navigation a'), tabContent = $('.tabs-content'), tabContentItems = $('.tabs-content li');
	var modal = $('.modal');
	var userAccess = $('#user-access-modal'), pastieModal = $('#pastie-modal');
	var logInModal = $('#log-in'), signInModal = $('#sign-in'), resetPasswordModal = $('#reset-password');
	var userAccessTabs = $('#user-access-modal .modal-items a'); 
	var logInModalTab = $('.modal-items a[href="#log-in"]'), signInModalTab = $('.modal-items a[href="#sign-in"]');
	var newPastieTab = $('.tabs-navigation a[data-content="new"]');
	var pastieModalTab = pastieModal.find('.modal-items .selected');
	var pastieTitle = $('#pastie-form-title'), pastiePrivate = pastieModal.find('.modal-form .lock-btn'), 
		pastieContent = $('#pastie-form-content'), pastieTags = $('#pastie-form-tags');

	// <--- Agregando Logo: --->
	$('#logo').append('<svg id="svg-logo" version="1.1" width="250px" height="50px" viewBox="-1 -1 250 50" enable-background="new -1 -1 250 50"><g class="svg-evenodd"><path d="M42.4,16.7l-20,20.1l0,0l-4.6-4.6l20-20.1L42.4,16.7L42.4,16.7z M43.6,15.5l3.1-3.1c0.7-0.7,0.7-1.8,0-2.5 l-2.1-2.1c-0.7-0.7-1.8-0.7-2.5,0L39,10.9L43.6,15.5L43.6,15.5z M16.7,33.6l-1.1,5.5l5.5-1.1L16.7,33.6L16.7,33.6L16.7,33.6z M34.5,12.9L34.5,12.9L23.9,0.5H4.5C2.6,0.5,1,2.1,1,4.1V45c0,1.9,1.6,3.6,3.5,3.6H31c1.9,0,3.5-1.6,3.5-3.6V27.1l13.4-13.5	c1.4-1.4,1.4-3.7,0-5l-2.1-2.1c-1.4-1.4-3.6-1.4-5,0L34.5,12.9L34.5,12.9L34.5,12.9z M32.8,28.9v16c0,1-0.8,1.8-1.8,1.8H4.5	c-1,0-1.8-0.8-1.8-1.8V4.1c0-1,0.8-1.8,1.8-1.8h17.7v8.9c0,1.9,1.6,3.6,3.5,3.6h7.1L15.1,32.5l-1.8,8.9l8.8-1.801L32.8,28.9 L32.8,28.9L32.8,28.9z M23.9,3.2v8c0,1,0.8,1.8,1.8,1.8h6.6L23.9,3.2L23.9,3.2z"/></g><g><path d="M53,15.4h3v4.1c1.1-1.5,2.2-2.6,3.3-3.3c1.6-0.9,3.2-1.4,4.9-1.4c1.2,0,2.3,0.2,3.3,0.7s1.9,1.1,2.6,1.8	c0.7,0.7,1.2,1.8,1.7,3.2c1-1.9,2.3-3.3,3.8-4.3s3.2-1.5,5-1.5c1.7,0,3.1,0.4,4.4,1.3s2.2,2,2.8,3.5c0.6,1.5,0.9,3.7,0.9,6.7v13.1 h-3.1V26.2c0-2.601-0.2-4.3-0.5-5.3c-0.4-1-1-1.7-1.9-2.3c-0.9-0.6-1.9-0.9-3.2-0.9c-1.5,0-2.9,0.4-4.1,1.3 c-1.2,0.9-2.1,2.1-2.7,3.5c-0.6,1.5-0.9,3.9-0.9,7.3v9.4h-3.1V27.1c0-2.899-0.2-4.8-0.5-5.899c-0.4-1-1-1.9-1.9-2.5 c-0.9-0.6-2-0.9-3.2-0.9c-1.4,0-2.8,0.4-4,1.3c-1.2,0.9-2.2,2-2.7,3.5C56.3,24,56,26.2,56,29.2v10.1h-3V15.4z"/><path d="M92.6,15.4h3.3l8.2,18.4l8-18.4h3.3L101.1,48h-3.2l4.6-10.6L92.6,15.4z"/><path d="M124.9,15.4V18c1.1-1.1,2.3-1.9,3.5-2.4c1.199-0.5,2.6-0.8,4-0.8c3.1,0,5.8,1.2,8,3.5 c2.199,2.3,3.3,5.4,3.3,9.101c0,3.6-1.101,6.5-3.4,8.899c-2.3,2.4-4.899,3.601-8,3.601c-1.399,0-2.7-0.2-3.8-0.7 c-1.2-0.5-2.4-1.3-3.5-2.4V48h-6V15.4H124.9z M131.2,20.3c-1.9,0-3.5,0.6-4.7,1.9c-1.2,1.3-1.9,3-1.9,5.1 c0,2.101,0.601,3.8,1.9,5.2c1.2,1.3,2.8,2,4.7,2c1.8,0,3.399-0.7,4.6-2c1.3-1.3,1.9-3,1.9-5.1c0-2.101-0.601-3.7-1.8-5	C134.7,21.1,133.1,20.3,131.2,20.3z"/><path d="M166.3,15.4h6v23.9h-6v-2.5c-1.2,1.101-2.3,1.9-3.5,2.4s-2.5,0.7-3.8,0.7c-3.1,0-5.8-1.2-8-3.601	c-2.3-2.399-3.4-5.399-3.4-8.899c0-3.7,1.101-6.7,3.301-9.101c2.199-2.4,4.8-3.5,7.899-3.5c1.4,0,2.8,0.3,4,0.8	c1.3,0.5,2.4,1.4,3.5,2.4V15.4z M160,20.3c-1.9,0-3.4,0.7-4.6,2c-1.2,1.3-1.801,3-1.801,5c0,2.101,0.601,3.8,1.9,5.101 c1.2,1.3,2.8,2,4.6,2c1.9,0,3.4-0.7,4.7-2c1.2-1.301,1.9-3,1.9-5.2c0-2.101-0.601-3.8-1.9-5.1C163.4,21,161.9,20.3,160,20.3z"/><path d="M193,18.7l-3.7,3.7c-1.5-1.5-2.899-2.2-4.1-2.2c-0.7,0-1.2,0.1-1.601,0.4c-0.399,0.3-0.6,0.6-0.6,1.1 c0,0.3,0.1,0.6,0.4,0.9c0.199,0.3,0.8,0.6,1.8,1.1l2.2,1.1c2.3,1.101,3.899,2.3,4.8,3.5c0.899,1.2,1.3,2.601,1.3,4.2 c0,2.1-0.8,3.9-2.3,5.3c-1.601,1.4-3.7,2.101-6.3,2.101c-3.5,0-6.301-1.4-8.301-4.101l3.7-4c0.7,0.8,1.5,1.5,2.5,2 c0.9,0.5,1.8,0.8,2.5,0.8c0.8,0,1.4-0.199,1.9-0.6s0.7-0.8,0.7-1.3c0-0.9-0.9-1.8-2.601-2.7l-2-1c-3.899-1.9-5.8-4.4-5.8-7.3 c0-1.9,0.7-3.5,2.2-4.8c1.5-1.3,3.3-2,5.6-2c1.601,0,3,0.3,4.4,1C190.9,16.5,192,17.5,193,18.7z"/><path d="M198.9,6.6h6v8.8h3.6v5.2h-3.6v18.7h-6V20.6H195.8v-5.2h3.101V6.6z"/><path d="M214,5.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.8s-0.399,2-1.1,2.7c-0.7,0.8-1.601,1.1-2.7,1.1 s-2-0.4-2.7-1.2c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.399-2,1.1-2.7C212,5.9,212.9,5.5,214,5.5z M211,15.4h6v23.9h-6V15.4z"/><path d="M246.4,29.1H227.1c0.301,1.7,1,3.101,2.2,4.101s2.8,1.5,4.601,1.5c2.199,0,4.199-0.8,5.8-2.4l5.1,2.4 c-1.3,1.8-2.8,3.1-4.5,4c-1.8,0.899-3.8,1.3-6.3,1.3c-3.8,0-6.8-1.2-9.2-3.5c-2.399-2.4-3.5-5.3-3.5-8.9c0-3.6,1.2-6.7,3.5-9.1 c2.4-2.4,5.3-3.6,8.8-3.6c3.801,0,6.801,1.2,9.2,3.6c2.4,2.4,3.5,5.6,3.5,9.5L246.4,29.1z M240.4,24.4c-0.4-1.3-1.2-2.4-2.301-3.3 c-1.1-0.9-2.5-1.3-4.1-1.3c-1.7,0-3.1,0.5-4.4,1.4c-0.8,0.6-1.5,1.6-2.199,3.1h13V24.4z"/></g></svg>');
	$('#mobile-menu').append('<svg id="svg-mobile-menu" version="1.1" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35"><g><circle cx="5" cy="20" r="3"/><circle cx="17" cy="20" r="3"/><circle cx="29" cy="20" r="3"/></g></svg>');
	
	// <--- Indicando idioma de la página para formatos de fecha --->
	moment.locale('es');

	// <--- Cerrar modales --->
	modal.click(function(event){ // Cerrar modal con clic
		var element = $(event.target);

		if(element.is(modal) || element.is('.close-modal-btn'))
			closeModal();
	});

	$(document).keyup(function(event){ // Cerrar con ESC
		console.log($(event));
    	if(event.which == 27 && modal.hasClass('visible'))
    		closeModal();
    });

	function closeModal(){
		modal.removeClass('visible');
    	navItems.removeClass('selected');
	};

	// <--- Menú principal --->
	navItems.click(function(event){
		event.preventDefault();
		var selectedItem = $(this);
		var element;

		if(!selectedItem.hasClass('selected')){
			element = $(event.target);
			if(element.is('#log-in-tab'))
				logInForm();
			
			if(element.is('#sign-in-tab'))
				signInForm();
		}
	});

	userAccessTabs.click(function(event){ // Cambiar entre opciones
		event.preventDefault();
		
		if(!$(this).hasClass('selected'))
			$(event.target).is(logInModalTab) ? logInForm() : signInForm();
		
	}); 

	$('#log-in .modal-bottom-message a').click(function(event){ // Formulario de recuperar contraseña
		event.preventDefault();
		resetPasswordForm();
	});

	$('#reset-password .modal-bottom-message a').click(function(event){ // Volver a iniciar sesión
		event.preventDefault();
		logInForm();
	});

	function logInForm(){
		navItems.removeClass('selected');
		$('#log-in-tab').addClass('selected');
		$('#user-access-modal .selected').removeClass('selected');
		logInModal.addClass('selected');
		logInModalTab.addClass('selected');
		userAccess.addClass('visible');
	};

	function signInForm(){
		navItems.removeClass('selected');
		$('#sign-in-tab').addClass('selected');
		$('#user-access-modal .selected').removeClass('selected');
		signInModal.addClass('selected');
		signInModalTab.addClass('selected');
		userAccess.addClass('visible');
	};

	function resetPasswordForm(){
		$('#user-access-modal .selected').removeClass('selected');
		logInModalTab.addClass('selected');
		resetPasswordModal.addClass('selected');
	};

	// <--- Menú de opciones --->
	tabItems.click(function(){
		var selectedItem = $(this);
		var selectedTab, selectedContent;

		if(!selectedItem.hasClass('selected')){

			selectedTab = selectedItem.data('content');
			selectedContent = tabContent.find('li[data-content="'+selectedTab+'"]');
			
			tabItems.removeClass('selected');
			tabContentItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected');
		
			tabContent.animate({'height': selectedContent.innerHeight()}, 200);
		}
	});

	// <--- Nuevo Pastie --->
	newPastieTab.click(function(){
		pastieModalTab.text('Nuevo pastie');
		pastieTitle.val('');
		pastiePrivate.removeClass('lock').addClass('unlock');
		pastieContent.val('');
		pastieTags.val('');
		pastieModal.addClass('visible');
	});

	$('body').on('click', '.lock-btn.lock', function(){
		$(this).removeClass('lock').addClass('unlock');
	});

	$('body').on('click', '.lock-btn.unlock', function(){
		$(this).removeClass('unlock').addClass('lock');
	});

	// <-- Operaciones sobre pastie -->
	$('.delete-pastie-btn').click(function(event){
		// Llamada AJAX para eliminar el pastie
		//Mostrar mensaje
	});

	$('.edit-pastie-btn').click(function(event){
		event.preventDefault();

		pastieTitle.prop('disabled',false);
		pastiePrivate.removeClass('disabled');
		pastieContent.prop('disabled',false);
		pastieTags.prop('disabled',false);

		$(this).text('Guardar').removeClass('edit-pastie').addClass('save-pastie');
	});

	$('.')

	$('body').on('click', '.save-pastie', function(event){
		//Llamada AJAX y cierre de la vista y/o modal
		// Mostrar alerta
	});
	
	// <-- Sección de prueba -->
	$('#pasties').feed(content, pastie, getElements, pasties);

	// <-- Mostrar tooltips -->
	$('body').tooltip({
		selector: '[data-toggle=tooltip]'
	});	
});