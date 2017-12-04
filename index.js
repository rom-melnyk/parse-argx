const DEFAULT_OPTION = {
    name: null,
    mandatory: false,
    expectValue: false,
    defaultValue: true,
};


/**
 * @param {Object[]} config
 * @param {String[]} args       array or arguments; if not set, current process arguments will be parsed
 * @returns {Object}
 */
function parseArgx(config, args) {
    const parsed = {
        isValid: false,
        namedArgs: {},
        anonymousArgs: []
    };

    ({ config, args } = prepareConfigAndArgs(config,args));
    if (!config.length) {
        return parsed;
    }

    while (config.length) {
        const option = config.shift();
        let { name, mandatory, defaultValue: value, expectValue } = Object.assign({}, DEFAULT_OPTION, option);
        if (!name || !name.length) {
            continue;
        } else if (!Array.isArray(name)) {
            name = [ name ];
        }

        const foundIndex = args.findIndex(arg => name.indexOf(arg) !== -1);
        if (foundIndex === -1) {
            if (mandatory) {
                parsed.isValid = false;
                return parsed;
            }
            // set value
        } else {
            if (expectValue) {
                value = args[foundIndex + 1];
                if (!value || !value.substr || value.substr(0, 1) === '-') {
                    parsed.isValid = false;
                    return parsed;
                }
            }
        }
    }

    return parsed;
}


/**
 * @param config
 * @param args
 * @returns {{ cloned: Object[], args: String[] }}
 */
function prepareConfigAndArgs(config, args) {
    const prepared = {};

    if (!config || !config.length) {
        prepared.config = [];
    } else {
        prepared.config = config;
    }

    if (typeof args === 'undefined') {
        prepared.args = process.argv.slice(2);
    } else if (!args || !args.length) {
        prepared.args = []
    } else {
        prepared.args = [...args];
    }

    return prepared;
}


function prepareSingleOption(option) {
    if (!option.name) {
        option.name = []
    } else if (!Array.isArray(option.name)) {
        option.name = [ option.name ];
    }


}


module.exports = parseArgx;
