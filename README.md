forms
=====

some helpers to make form js easier

Example usage:

//add dynamic functionality to the forms
		$('form').forms({
			toggle: [
				{ 
					clickee_parent : '.form-type-checkboxes',
					clickee: '.form-type-checkboxes [value="Other"]',
					target : '.form-item.other'
				},
				{ 
					clickee_parent : '.form-type-checkboxes',
					clickee: '.form-type-checkboxes [value="Corporation"]',
					target : '.month-fieldset'
				}
			],
			
			radios: [	
				{ 
					clickee_parent : '.form-type-radios',
					target : '.form-item.other'
				}
			]
		});
