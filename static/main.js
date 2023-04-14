$(document).ready(function() {
    $('.btn-center').click(function() {
        console.log('Game started!');
        $.ajax({
            url: '',
            type: 'GET',
            contentType: 'application/json',
            data: {button_text: $(this).text()},
            success: function(response) {
                if($('.btn-center').text() =="Start"){
                    $('.btn-center').text(response.message);
                }
            }
        })
    })

    $('.btn-left').click(function() {
        console.log('Increased!');
        $.ajax({
            url: '',
            type: 'GET',
            contentType: 'application/json',
            data: {
                button_text: $(this).text(),
                center_text: $('.btn-center').text()
            },
            success: function(response) {
                $('.btn-center').text(response.message);
            }
        })
    })

    $('.btn-right').click(function() {
        console.log('Decreased!');
        $.ajax({
            url: '',
            type: 'GET',
            contentType: 'application/json',
            data: {
                button_text: $(this).text(),
                center_text: $('.btn-center').text()
            },
            success: function(response) {
                $('.btn-center').text(response.message);
            }
        })
    })
})