/**
 * THIS FILE WAS GENERATED. BE WARY OF EDITING BY HAND.
 */
/**
 * ESLint supports the use of third-party plugins. Before using the plugin, you have to install it using npm.
 */
export type Plugins = string[];
/**
 * ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments or configuration files.
 */
export type Rules = PossibleErrors & BestPractices & StrictMode & Variables & NodeAndCommonJs & StylisticIssues & EcmaScript6 & Legacy;
export type Rule = number | ("off" | "warn" | "error") | unknown[];
/**
 * Allows to override configuration for files and folders, specified by glob patterns
 */
export type Overrides = {
    /**
     * Glob pattern for files to apply 'overrides' configuration, relative to the directory of the config file
     */
    files: string | [string, ...string[]];
    /**
     * If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string | string[];
    /**
     * If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration won’t apply
     */
    excludedFiles?: string | string[];
    ecmaFeatures?: EcmaFeatures;
    env?: Env;
    globals?: Globals;
    parser?: string;
    parserOptions?: ParserOptions;
    plugins?: Plugins;
    /**
     * To specify a processor, specify the plugin name and processor name joined by a forward slash
     */
    processor?: string;
    rules?: Rules;
    settings?: Settings;
    overrides?: Overrides;
}[];
export interface Eslintrc {
    $schema?: "https://json.schemastore.org/eslintrc.json";
    ecmaFeatures?: EcmaFeatures;
    env?: Env;
    /**
     * If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string | string[];
    globals?: Globals;
    /**
     * Prevent comments from changing config or rules
     */
    noInlineConfig?: boolean;
    parser?: string;
    parserOptions?: ParserOptions;
    plugins?: Plugins;
    /**
     * By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, set this to `true` in a configuration in the root of your project.
     */
    root?: boolean;
    /**
     * Tell ESLint to ignore specific files and directories. Each value uses the same pattern as the `.eslintignore` file.
     */
    ignorePatterns?: string | string[];
    rules?: Rules;
    settings?: Settings;
    overrides?: Overrides;
}
/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to enable support for ECMAScript 6 as well as JSX by using configuration settings.
 */
export interface EcmaFeatures {
    arrowFunctions?: boolean;
    binaryLiterals?: boolean;
    blockBindings?: boolean;
    classes?: boolean;
    defaultParams?: boolean;
    destructuring?: boolean;
    /**
     * Enables support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It’s recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
     */
    experimentalObjectRestSpread?: boolean;
    forOf?: boolean;
    generators?: boolean;
    /**
     * allow return statements in the global scope
     */
    globalReturn?: boolean;
    /**
     * enable global strict mode (if ecmaVersion is 5 or greater)
     */
    impliedStrict?: boolean;
    /**
     * enable JSX
     */
    jsx?: boolean;
    modules?: boolean;
    objectLiteralComputedProperties?: boolean;
    objectLiteralDuplicateProperties?: boolean;
    objectLiteralShorthandMethods?: boolean;
    objectLiteralShorthandProperties?: boolean;
    octalLiterals?: boolean;
    regexUFlag?: boolean;
    regexYFlag?: boolean;
    restParams?: boolean;
    spread?: boolean;
    superInFunctions?: boolean;
    templateStrings?: boolean;
    unicodeCodePointEscapes?: boolean;
}
/**
 * An environment defines global variables that are predefined.
 */
export interface Env {
    /**
     * defines require() and define() as global variables as per the amd spec
     */
    amd?: boolean;
    /**
     * AppleScript global variables
     */
    applescript?: boolean;
    /**
     * Atom test helper globals
     */
    atomtest?: boolean;
    /**
     * browser global variables
     */
    browser?: boolean;
    /**
     * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack)
     */
    commonjs?: boolean;
    /**
     * Globals common to both Node and Browser
     */
    "shared-node-browser"?: boolean;
    /**
     * Ember test helper globals
     */
    embertest?: boolean;
    /**
     * enable all ECMAScript 6 features except for modules
     */
    es6?: boolean;
    /**
     * GreaseMonkey globals
     */
    greasemonkey?: boolean;
    /**
     * adds all of the Jasmine testing global variables for version 1.3 and 2.0
     */
    jasmine?: boolean;
    /**
     * Jest global variables
     */
    jest?: boolean;
    /**
     * jQuery global variables
     */
    jquery?: boolean;
    /**
     * Meteor global variables
     */
    meteor?: boolean;
    /**
     * adds all of the Mocha test global variables
     */
    mocha?: boolean;
    /**
     * MongoDB global variables
     */
    mongo?: boolean;
    /**
     * Java 8 Nashorn global variables
     */
    nashorn?: boolean;
    /**
     * Node.js global variables and Node.js scoping
     */
    node?: boolean;
    /**
     * PhantomJS global variables
     */
    phantomjs?: boolean;
    /**
     * Prototype.js global variables
     */
    prototypejs?: boolean;
    /**
     * Protractor global variables
     */
    protractor?: boolean;
    /**
     * QUnit global variables
     */
    qunit?: boolean;
    /**
     * Service Worker global variables
     */
    serviceworker?: boolean;
    /**
     * ShellJS global variables
     */
    shelljs?: boolean;
    /**
     * WebExtensions globals
     */
    webextensions?: boolean;
    /**
     * web workers global variables
     */
    worker?: boolean;
}
/**
 * Set each global variable name equal to true to allow the variable to be overwritten or false to disallow overwriting.
 */
export interface Globals {
    [k: string]: ("readonly" | "writable" | "off") | boolean;
}
/**
 * The JavaScript language options to be supported
 */
export interface ParserOptions {
    ecmaFeatures?: EcmaFeatures;
    /**
     * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13 or "latest" to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11) or 2021 (same as 12) or 2022 (same as 13) to use the year-based naming. "latest" always enables the latest supported ECMAScript version.
     */
    ecmaVersion?: 3 | 5 | 6 | 2015 | 7 | 2016 | 8 | 2017 | 9 | 2018 | 10 | 2019 | 11 | 2020 | 12 | 2021 | 13 | 2022 | "latest";
    /**
     * set to "script" (default) or "module" if your code is in ECMAScript modules
     */
    sourceType?: "script" | "module";
}
export interface PossibleErrors {
    /**
     * Require or disallow trailing commas
     */
    "comma-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce “for” loop update clause moving the counter in the right direction
     */
    "for-direction"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce return statements in getters
     */
    "getter-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow await inside of loops
     */
    "no-await-in-loop"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comparing against -0
     */
    "no-compare-neg-zero"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignment operators in conditional expressions
     */
    "no-cond-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of console
     */
    "no-console"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow constant expressions in conditions
     */
    "no-constant-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow control characters in regular expressions
     */
    "no-control-regex"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of debugger
     */
    "no-debugger"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate arguments in function definitions
     */
    "no-dupe-args"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate keys in object literals
     */
    "no-dupe-keys"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate case labels
     */
    "no-duplicate-case"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty block statements
     */
    "no-empty"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty character classes in regular expressions
     */
    "no-empty-character-class"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning exceptions in catch clauses
     */
    "no-ex-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary boolean casts
     */
    "no-extra-boolean-cast"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary parentheses
     */
    "no-extra-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary semicolons
     */
    "no-extra-semi"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning function declarations
     */
    "no-func-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow function or var declarations in nested blocks
     */
    "no-inner-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow invalid regular expression strings in RegExp constructors
     */
    "no-invalid-regexp"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow irregular whitespace outside of strings and comments
     */
    "no-irregular-whitespace"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negating the left operand in in expressions (deprecated)
     */
    "no-negated-in-lhs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow calling global object properties as functions
     */
    "no-obj-calls"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow calling some Object.prototype methods directly on objects
     */
    "no-prototype-builtins"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple spaces in regular expressions
     */
    "no-regex-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow sparse arrays
     */
    "no-sparse-arrays"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow template literal placeholder syntax in regular strings
     */
    "no-template-curly-in-string"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow confusing multiline expressions
     */
    "no-unexpected-multiline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     */
    "no-unreachable"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow control flow statements in finally blocks
     */
    "no-unsafe-finally"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negating the left operand of relational operators
     */
    "no-unsafe-negation"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require calls to isNaN() when checking for NaN
     */
    "use-isnan"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce valid JSDoc comments
     */
    "valid-jsdoc"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce comparing typeof expressions against valid strings
     */
    "valid-typeof"?: number | ("off" | "warn" | "error") | unknown[];
}
export interface BestPractices {
    /**
     * Enforce getter and setter pairs in objects
     */
    "accessor-pairs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce return statements in callbacks of array methods
     */
    "array-callback-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the use of variables within the scope they are defined
     */
    "block-scoped-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce that class methods utilize this
     */
    "class-methods-use-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     */
    complexity?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require return statements to either always or never specify values
     */
    "consistent-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent brace style for all control statements
     */
    curly?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require default cases in switch statements
     */
    "default-case"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent newlines before and after dots
     */
    "dot-location"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce dot notation whenever possible
     */
    "dot-notation"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require the use of === and !==
     */
    eqeqeq?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require for-in loops to include an if statement
     */
    "guard-for-in"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of alert, confirm, and prompt
     */
    "no-alert"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of arguments.caller or arguments.callee
     */
    "no-caller"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow lexical declarations in case clauses
     */
    "no-case-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     */
    "no-div-regex"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow else blocks after return statements in if statements
     */
    "no-else-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty functions
     */
    "no-empty-function"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty destructuring patterns
     */
    "no-empty-pattern"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow null comparisons without type-checking operators
     */
    "no-eq-null"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of eval()
     */
    "no-eval"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow extending native types
     */
    "no-extend-native"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary calls to .bind()
     */
    "no-extra-bind"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary labels
     */
    "no-extra-label"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow fallthrough of case statements
     */
    "no-fallthrough"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow leading or trailing decimal points in numeric literals
     */
    "no-floating-decimal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignments to native objects or read-only global variables
     */
    "no-global-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow shorthand type conversions
     */
    "no-implicit-coercion"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var and named function declarations in the global scope
     */
    "no-implicit-globals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of eval()-like methods
     */
    "no-implied-eval"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow this keywords outside of classes or class-like objects
     */
    "no-invalid-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of the __iterator__ property
     */
    "no-iterator"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow labeled statements
     */
    "no-labels"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary nested blocks
     */
    "no-lone-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow function declarations and expressions inside loop statements
     */
    "no-loop-func"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow magic numbers
     */
    "no-magic-numbers"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple spaces
     */
    "no-multi-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiline strings
     */
    "no-multi-str"?: number | ("off" | "warn" | "error") | unknown[];
    "no-native-reassign"?: Rule;
    /**
     * Disallow new operators outside of assignments or comparisons
     */
    "no-new"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the Function object
     */
    "no-new-func"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the String, Number, and Boolean objects
     */
    "no-new-wrappers"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow octal literals
     */
    "no-octal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow octal escape sequences in string literals
     */
    "no-octal-escape"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning function parameters
     */
    "no-param-reassign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of the __proto__ property
     */
    "no-proto"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var redeclaration
     */
    "no-redeclare"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow certain properties on certain objects
     */
    "no-restricted-properties"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignment operators in return statements
     */
    "no-return-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary return await
     */
    "no-return-await"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow javascript: urls
     */
    "no-script-url"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignments where both sides are exactly the same
     */
    "no-self-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comparisons where both sides are exactly the same
     */
    "no-self-compare"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comma operators
     */
    "no-sequences"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow throwing literals as exceptions
     */
    "no-throw-literal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unmodified loop conditions
     */
    "no-unmodified-loop-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused expressions
     */
    "no-unused-expressions"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused labels
     */
    "no-unused-labels"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary calls to .call() and .apply()
     */
    "no-useless-call"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary concatenation of literals or template literals
     */
    "no-useless-concat"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary escape characters
     */
    "no-useless-escape"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow redundant return statements
     */
    "no-useless-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow void operators
     */
    "no-void"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified warning terms in comments
     */
    "no-warning-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow with statements
     */
    "no-with"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require using Error objects as Promise rejection reasons
     */
    "prefer-promise-reject-errors"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     */
    radix?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow async functions which have no await expression
     */
    "require-await"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require var declarations be placed at the top of their containing scope
     */
    "vars-on-top"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses around immediate function invocations
     */
    "wrap-iife"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or Disallow “Yoda” conditions
     */
    yoda?: number | ("off" | "warn" | "error") | unknown[];
}
export interface StrictMode {
    /**
     * require or disallow strict mode directives
     */
    strict?: number | ("off" | "warn" | "error") | unknown[];
}
export interface Variables {
    /**
     * Require or disallow initialization in var declarations
     */
    "init-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow catch clause parameters from shadowing variables in the outer scope
     */
    "no-catch-shadow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow deleting variables
     */
    "no-delete-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow labels that share a name with a variable
     */
    "no-label-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified global variables
     */
    "no-restricted-globals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var declarations from shadowing variables in the outer scope
     */
    "no-shadow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow identifiers from shadowing restricted names
     */
    "no-shadow-restricted-names"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of undeclared variables unless mentioned in /*global * / comments
     */
    "no-undef"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of undefined as an identifier
     */
    "no-undefined"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow initializing variables to undefined
     */
    "no-undef-init"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused variables
     */
    "no-unused-vars"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of variables before they are defined
     */
    "no-use-before-define"?: number | ("off" | "warn" | "error") | unknown[];
}
export interface NodeAndCommonJs {
    /**
     * Require return statements after callbacks
     */
    "callback-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require require() calls to be placed at top-level module scope
     */
    "global-require"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require error handling in callbacks
     */
    "handle-callback-err"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow use of the Buffer() constructor
     */
    "no-buffer-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow require calls to be mixed with regular var declarations
     */
    "no-mixed-requires"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with calls to require
     */
    "no-new-require"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow string concatenation with __dirname and __filename
     */
    "no-path-concat"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of process.env
     */
    "no-process-env"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of process.exit()
     */
    "no-process-exit"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified modules when loaded by require
     */
    "no-restricted-modules"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow synchronous methods
     */
    "no-sync"?: number | ("off" | "warn" | "error") | unknown[];
}
export interface StylisticIssues {
    /**
     * Enforce line breaks after opening and before closing array brackets
     */
    "array-bracket-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside array brackets
     */
    "array-bracket-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce line breaks after each array element
     */
    "array-element-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside single-line blocks
     */
    "block-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent brace style for blocks
     */
    "brace-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce camelcase naming convention
     */
    camelcase?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce or disallow capitalization of the first letter of a comment
     */
    "capitalized-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow trailing commas
     */
    "comma-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after commas
     */
    "comma-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent comma style
     */
    "comma-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside computed property brackets
     */
    "computed-property-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent naming when capturing the current execution context
     */
    "consistent-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce at least one newline at the end of files
     */
    "eol-last"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    "func-call-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require function names to match the name of the variable or property to which they are assigned
     */
    "func-name-matching"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow named function expressions
     */
    "func-names"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either function declarations or expressions
     */
    "func-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce line breaks between arguments of a function call
     */
    "function-call-argument-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent line breaks inside function parentheses
     */
    "function-paren-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified identifiers
     */
    "id-blacklist"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce minimum and maximum identifier lengths
     */
    "id-length"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require identifiers to match a specified regular expression
     */
    "id-match"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the location of arrow function bodies
     */
    "implicit-arrow-linebreak"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent indentation
     */
    indent?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent indentation (legacy, deprecated)
     */
    "indent-legacy"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     */
    "jsx-quotes"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing between keys and values in object literal properties
     */
    "key-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after keywords
     */
    "keyword-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce position of line comments
     */
    "line-comment-position"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow an empty line between class members
     */
    "lines-between-class-members"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent linebreak style
     */
    "linebreak-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require empty lines around comments
     */
    "lines-around-comment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow newlines around directives
     */
    "lines-around-directive"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum depth that blocks can be nested
     */
    "max-depth"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum line length
     */
    "max-len"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of lines per file
     */
    "max-lines"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum depth that callbacks can be nested
     */
    "max-nested-callbacks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of parameters in function definitions
     */
    "max-params"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of statements allowed in function blocks
     */
    "max-statements"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of statements allowed per line
     */
    "max-statements-per-line"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a particular style for multiline comments
     */
    "multiline-comment-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce newlines between operands of ternary expressions
     */
    "multiline-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require constructor function names to begin with a capital letter
     */
    "new-cap"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow an empty line after var declarations
     */
    "newline-after-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require an empty line before return statements
     */
    "newline-before-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require a newline after each call in a method chain
     */
    "newline-per-chained-call"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses when invoking a constructor with no arguments
     */
    "new-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow Array constructors
     */
    "no-array-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow bitwise operators
     */
    "no-bitwise"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow continue statements
     */
    "no-continue"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow inline comments after code
     */
    "no-inline-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow if statements as the only statement in else blocks
     */
    "no-lonely-if"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow mixed binary operators
     */
    "no-mixed-operators"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow mixed spaces and tabs for indentation
     */
    "no-mixed-spaces-and-tabs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow use of chained assignment expressions
     */
    "no-multi-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple empty lines
     */
    "no-multiple-empty-lines"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negated conditions
     */
    "no-negated-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow nested ternary expressions
     */
    "no-nested-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow Object constructors
     */
    "no-new-object"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the unary operators ++ and --
     */
    "no-plusplus"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified syntax
     */
    "no-restricted-syntax"?: number | ("off" | "warn" | "error") | unknown[];
    "no-spaced-func"?: Rule;
    /**
     * Disallow tabs in file
     */
    "no-tabs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow ternary operators
     */
    "no-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow trailing whitespace at the end of lines
     */
    "no-trailing-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow dangling underscores in identifiers
     */
    "no-underscore-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow ternary operators when simpler alternatives exist
     */
    "no-unneeded-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow whitespace before properties
     */
    "no-whitespace-before-property"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the location of single-line statements
     */
    "nonblock-statement-body-position"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent line breaks inside braces
     */
    "object-curly-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside braces
     */
    "object-curly-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce placing object properties on separate lines
     */
    "object-property-newline"?: number | ("off" | "warn" | "error") | unknown[];
    "object-shorthand"?: Rule;
    /**
     * Enforce variables to be declared either together or separately in functions
     */
    "one-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow newlines around var declarations
     */
    "one-var-declaration-per-line"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow assignment operator shorthand where possible
     */
    "operator-assignment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent linebreak style for operators
     */
    "operator-linebreak"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow padding within blocks
     */
    "padded-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow padding lines between statements
     */
    "padding-line-between-statements"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require quotes around object literal property names
     */
    "quote-props"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    quotes?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require JSDoc comments
     */
    "require-jsdoc"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow semicolons instead of ASI
     */
    semi?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after semicolons
     */
    "semi-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce location of semicolons
     */
    "semi-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Requires object keys to be sorted
     */
    "sort-keys"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require variables within the same declaration block to be sorted
     */
    "sort-vars"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before blocks
     */
    "space-before-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before function definition opening parenthesis
     */
    "space-before-function-paren"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing after the // or /* in a comment
     */
    "spaced-comment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require spacing around operators
     */
    "space-infix-ops"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside parentheses
     */
    "space-in-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before or after unary operators
     */
    "space-unary-ops"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce spacing around colons of switch statements
     */
    "switch-colon-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing between template tags and their literals
     */
    "template-tag-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow Unicode byte order mark (BOM)
     */
    "unicode-bom"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parenthesis around regex literals
     */
    "wrap-regex"?: number | ("off" | "warn" | "error") | unknown[];
}
export interface EcmaScript6 {
    /**
     * Require braces around arrow function bodies
     */
    "arrow-body-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses around arrow function arguments
     */
    "arrow-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     */
    "arrow-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require super() calls in constructors
     */
    "constructor-super"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing around * operators in generator functions
     */
    "generator-star-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning class members
     */
    "no-class-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow arrow functions where they could be confused with comparisons
     */
    "no-confusing-arrow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning const variables
     */
    "no-const-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate class members
     */
    "no-dupe-class-members"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate module imports
     */
    "no-duplicate-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the Symbol object
     */
    "no-new-symbol"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified modules when loaded by import
     */
    "no-restricted-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow this/super before calling super() in constructors
     */
    "no-this-before-super"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary computed property keys in object literals
     */
    "no-useless-computed-key"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary constructors
     */
    "no-useless-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     */
    "no-useless-rename"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require let or const instead of var
     */
    "no-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow method and property shorthand syntax for object literals
     */
    "object-shorthand"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require arrow functions as callbacks
     */
    "prefer-arrow-callback"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require const declarations for variables that are never reassigned after declared
     */
    "prefer-const"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require destructuring from arrays and/or objects
     */
    "prefer-destructuring"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow parseInt() in favor of binary, octal, and hexadecimal literals
     */
    "prefer-numeric-literals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require Reflect methods where applicable
     */
    "prefer-reflect"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require rest parameters instead of arguments
     */
    "prefer-rest-params"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require spread operators instead of .apply()
     */
    "prefer-spread"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require template literals instead of string concatenation
     */
    "prefer-template"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require generator functions to contain yield
     */
    "require-yield"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce spacing between rest and spread operators and their expressions
     */
    "rest-spread-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce sorted import declarations within modules
     */
    "sort-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require symbol descriptions
     */
    "symbol-description"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing around embedded expressions of template strings
     */
    "template-curly-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing around the * in yield* expressions
     */
    "yield-star-spacing"?: number | ("off" | "warn" | "error") | unknown[];
}
export interface Legacy {
    "max-depth"?: Rule;
    "max-len"?: Rule;
    "max-params"?: Rule;
    "max-statements"?: Rule;
    "no-bitwise"?: Rule;
    "no-plusplus"?: Rule;
}
/**
 * ESLint supports adding shared settings into configuration file. You can add settings object to ESLint configuration file and it will be supplied to every rule that will be executed. This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.
 */
export interface Settings {
    [k: string]: unknown;
}
