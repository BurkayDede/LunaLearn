/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
new DataTable('#example', {
    columnDefs: [
        {
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }
    ],
    select: {
        style: 'os',
        selector: 'td:first-child'
    },
    order: [[1, 'asc']]
});