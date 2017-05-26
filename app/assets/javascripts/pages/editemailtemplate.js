
$(function(){



    /* --- APP VALUES --- */
    var app_id = $('#current_app_id').val();


    /* --- AUTHENTICATION --- */
    var csrf_token = $('meta[name=csrf-token]').attr('content');



    /* --- INPUT FIELDS --- */
    var emailTitleInput = $('#emailTitleInput');
    var emailContentInput = $('#emailContentInput');
    var buttonTextInput = $('#buttonTextInput');
    var buttonLink = $('#buttonUrlInput');
    var button_select = $('#button_select');


    /* --- DIV Fields --- */
    var emailViewButtonFields = $('#emailViewButtonFields');


    /* --- BUTTONS --- */
    var email_submit = $('email_list_submit_button');


    /* --- Functions to live update EmailView --- */

    emailTitleInput.on("keyup", function(){
        $('#printEmailTitle').html(emailTitleInput.val());
    });

    emailContentInput.on("keyup", function(){
        $('#printEmailContent').html(emailContentInput.val());
    });

    buttonTextInput.on("keyup", function(){
        $('#printButtonText').html(buttonTextInput.val());
    });

    button_select.on("change", function(){

        if ($(this).val() === '0') {
            $('#emailViewButtonFields').attr('class', 'hidden');
        } else {
            $('#emailViewButtonFields').attr('class', ' ');
        }
    });


    email_submit.on("click", function(e){

        e.preventDefault();

        var email_subject = emailTitleInput.val();
        var email_content = emailContentInput.val();
        var button_text = buttonTextInput.val();
        var button_url =  buttonLink.val();
        var button = button_select.val();

        $.ajax({
            type:'POST',
            url: '/ajax_create_email_list',
            dataType: "json",
            data: {
                app_id: app_id,
                email_subject: email_subject,
                email_content: email_content,
                button: button,
                button_text: button_text,
                button_url: button_url,
                authenticity_token: csrf_token
            },
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);
            }
        });






    });






});