requirejs.config({
    deps: ['main'],
    paths: {
        // Main game class
        'StarPleb':             'core/StarPleb',

        // core
        'Player':               'core/Player',

        // locations
        'Universe':             'locations/Universe',
        'Galaxy':               'locations/Galaxy',
        'System':               'locations/System',
        'LocationFactory':      'locations/LocationFactory',

        // astral bodies
        'AstralBody':           'astral-bodies/AstralBody',
        'Star':                 'astral-bodies/Star',
        'Planet':               'astral-bodies/Planet',
        'Satellite':            'astral-bodies/Satellite',
        'Asteroid':             'astral-bodies/Asteroid',
        'AstralBodyFactory':    'astral-bodies/AstralBodyFactory',

        // ships
        'Ship':                 'ships/Ship',
        'HullTypes':            'ships/HullTypes',
        'Weapon':               'ships/Weapon',
        'WeaponTypes':          'ships/WeaponTypes',
        'Shield':               'ships/Shield',
        'Component':            'ships/Component',
        'ShipFactory':          'ships/ShipFactory',

        // utils
        'NameGenerator':        'utils/NameGenerator'
    }
});

