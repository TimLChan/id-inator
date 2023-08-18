/**
 * Template tags to generate random ids because insomnia only has UUID
 * built into the default generators
 */
module.exports.templateTags = [
    {
        name: 'traceparent',
        displayName: 'random-traceparent',
        description: 'generates a random traceparent',
        args: [ ],
        async run(context) {
            const crypto = require('crypto');
            const traceId = crypto.randomBytes(16).toString('hex');
            const id = crypto.randomBytes(8).toString('hex');
            return `00-${traceId}-${id}-01`;
        }
    },
    {
        name: 'hexstring',
        displayName: 'random-hexstring',
        description: 'generates a random hexadecimal string (trace/spanid)',
        args: [
            {
                displayName: 'string length',
                description: 'length (chars)',
                type: 'number',
                defaultValue: 32
            }
         ],
        async run(context, idlength) {
            const crypto = require('crypto');
            let bytesize = Number(idlength / 2);
            if (bytesize < 1){
                bytesize = 16;
            }
            const traceId = crypto.randomBytes(bytesize).toString('hex');
            return `${traceId}`;
        }
    }
];