// https://js.checkio.org/en/mission/conversion-into-camelcase/

function toCamelCase(name) {
    return name.split("_").map(word => word[0].toUpperCase() + word.slice(1)).join("");
}

toCamelCase("my_function_name")
