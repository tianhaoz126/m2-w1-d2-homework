$(document).ready(function() {
    $("#btn").click(function(event){
        $.getJSON('data.json', function(data) {
            var table = $('main table');

            table.find('caption, thead, tbody, tfoot').empty();

            table.append(`<caption>${data.title}</caption>`);

            table.find('thead').append(`
                <tr>
                    <th>${data.heading}</th>
                    <th>${data.head1}</th>
                    <th>${data.head2}</th>
                    <th>${data.head3}</th>
                    <th>${data.head4}</th>
                </tr>
            `);

            table.find('tbody').append(`
                <tr>
                    <td>${data.subheadcal}</td>
                    <td>${data.cal1}</td> 
                    <td>${data.cal2}</td>
                    <td>${data.cal3}</td>
                    <td>${data.cal4}</td>
                </tr>
                <tr>
                    <td>${data.subheadfat}</td>
                    <td>${data.fat1}</td> 
                    <td>${data.fat2}</td>
                    <td>${data.fat3}</td>
                    <td>${data.fat4}</td>
                </tr>
            `);

            table.find('tfoot').append(`
                <tr>
                    <td>${data.subheadven}</td>
                    <td>${data.ven1}</td>
                    <td>${data.ven2}</td>
                    <td>${data.ven3}</td>
                    <td>${data.ven4}</td>
                </tr>
            `);
        });
    });
});
