$('.alert').hide();
$(function(){
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#orderButton').click(function(clickEvent){
        if($('#apiForm').get(0).checkValidity())
        {
            console.log("Email subscription from: ", $('#email').val(), ' for ', $('#order').val());
        } else {
            console.log("Gotta enter an email, bruh!");
        }
        //pretendSendMail($('#order').val());
        sendMail($('#order').val());
        $('#orderMessage').html("Thank you for signing up for Bonus Trek.");
        $('.alert').show();
    });

    function pretendSendMail(order) {
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json', 
            data: {
                'message': {
                  'from_email': 'info@joesimpsondesign.com',
                  'to': [
                      {
                        'email': 'info@joesimpsondesign.com',
                        'name': 'Joe A. Simpson, Jr.',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': 'Star Trek: New Bonus Trek Subscription',
                  'html': 'Live long and prosper friend. Thank you for signing up for Bonus Trek.' +  order + 'Check comm systems and we will begin transmission shortly.'
                }
            }
        }).done(function(response){
            console.log(response);
        });
    }

    function sendMail(order) {
        $.ajax({
              type: 'POST',
              url: 'https://mandrillapp.com/api/1.0/messages/send.json',
              data: {
                'key': 'vQhWvfmfhHyp6OdfaNkpAw',
                'message': {
                  'from_email': 'info@joesimpsondesign.com',
                  'to': [
                      {
                        'email': 'info@joesimpsondesign.com',
                        'name': 'Joe A. Simpson, Jr.',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': 'Star Trek: New Bonus Trek Subscription',
                  'html': 'Live long and prosper friend. Thank you for signing up for Bonus Trek.' +  order + 'Check comm systems and we will begin transmission shortly.'
                }
              }
        }).done(function(response) {
               console.log(response); // if you're into that sorta thing
        });
    }
});