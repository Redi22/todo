<!-- <!doctype html> -->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="{{ asset('/js/app.js') }}" defer ></script>
        <!-- <script src="{{ asset('/js/vuetify.js') }}" defer ></script> -->

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
      
    </head>
    <body>
        
            <div id="app">
                <App></App>
            </div>
    <!-- <script type="text/javascript" src="{{ mix('js/app.js') }}"></script> -->
        
    </body>




    <!-- <script src="/js/app.js"></script> -->
</html>
