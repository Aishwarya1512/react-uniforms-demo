const SignupSchema = new SimpleSchema({
    firstname: {
        type: String,
        min: 5
    }, 
    lastname: {
        type: String,
        optional: true,
    },
    dateRange: {
        type: Object,
    },
    'dateRange.start': {
        type: Date,
        label: 'Start Date',
        custom: function() {
            if(this.value >= this.field('dateRange.stop').value) {
                return 'DateRangeStartError';
            }
        }
    },
    'dateRange.stop': {
        type: Date,
        label: 'Stop Date',
        custom: function() {
            if(this.value <= this.field('dateRange.start').value) {
                return 'DateRangeStopError';
            }
        }
    },
    timeRange: {
        type: Object,
    },
    'timeRange.start': {
        type: Date,
        label: 'Start time',
        custom: function() {
            if(this.value >= this.field('timeRange.stop').value) {
                return 'TimeRangeStartError';
            }
        }
    },
    'timeRange.stop': {
        type: Date,
        label: 'Stop time',
        custom: function() {
            if(this.value <= this.field('timeRange.start').value) {
                return 'TimeRangeStopError';
            }
        }
    }
});

SignupSchema.messages({
    required: '[label] is required',
    minString: '[label] must be at least [min] characters',
    DateRangeStartError: 'Start date cannot be greater than stop date',
    DateRangeStopError: 'Stop date cannot be lesser than start date',
    TimeRangeStartError: 'Start time cannot be greater than stop time',
    TimeRangeStopError: 'Stop time cannot be lesser than start time'
})

export default SignupSchema;