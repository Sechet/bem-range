({
    block: 'page',
    title: 'Hello, World!',
    styles: [
			{ elem: 'css', url: '_index.css' }
    ],
		scripts : [
			{ elem : 'js', url : '_index.js' }
		],
    content: [
			{
				block: 'range',
				title: 'Range 1',
				min: 0,
				max: 50,
				showTooltip: true,
				showValue: false
			},
			{
				block: 'range',
				title: 'Range 1',
				min: 50,
				max: 100,
				showTooltip: true,
				showValue: true
			}
    ]
});
