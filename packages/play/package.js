console.log('PLAY private package loaded');
Npm.depends({
    'play': '0.5.0'
});

Package.on_use(function (api) {
console.log('PLAY private package used');
    api.add_files('play.js', 'server'); // Or 'client', or ['server', 'client']
});
