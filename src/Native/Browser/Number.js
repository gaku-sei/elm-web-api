Elm.Native = Elm.Native || {};
Elm.Native.Browser = Elm.Native.Browser || {};
Elm.Native.Browser.Number = Elm.Native.Browser.Number || {};

Elm.Native.Browser.Number.make = function (localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Browser = localRuntime.Native.Browser || {};
    localRuntime.Native.Browser.Number = localRuntime.Native.Browser.Number || {};

    if (!localRuntime.Native.Browser.Number.values) {
	    var Result = Elm.Result.make(localRuntime);
        
        var toExponential = function (number) {
            // No try/catch needed because cannot throw exception
            return number.toExponential();
        };

        var toExponentialDigits = function (digits, number) {
            try {
                return Result.Ok(number.toExponential(digits));
            } catch (ex) {
                return Result.Err(ex.message);
            }
        };

        var toFixed = function (number) {
            // No try/catch needed because cannot throw exception
            return number.toFixed();
        };

        var toFixedDigits = function (digits, number) {
            try {
                return Result.Ok(number.toFixed(digits));
            } catch (ex) {
                return Result.Err(ex.message);
            }
        };

        var toPrecisionDigits = function (digits, number) {
            try {
                return Result.Ok(number.toPrecision(digits));
            } catch (ex) {
                return Result.Err(ex.message);
            }
        };

        var toStringUsingBase = function (base, number) {
            try {
                return Result.Ok(number.toString(base));
            } catch (ex) {
                return Result.Err(ex.message);
            }
        };

        localRuntime.Native.Browser.Number.values = {
            maxValue: Number.MAX_VALUE,
            minValue: Number.MIN_VALUE,
            nan: Number.Nan,
            negativeInfinity: Number.NEGATIVE_INFINITY,
            positiveInfinity: Number.POSITIVE_INFINITY,
            toExponential: toExponential,
            toExponentialDigits: F2(toExponentialDigits),
            toFixed: toFixed,
            toFixedDigits: F2(toFixedDigits),
            toPrecisionDigits: F2(toPrecisionDigits),
            toStringUsingBase: F2(toStringUsingBase)
        };
    }
    
    return localRuntime.Native.Browser.Number.values;
};
