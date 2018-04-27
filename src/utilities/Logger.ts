import * as moment from 'moment';

export namespace Logger {
    export function debug(area: string, message: string): void {
        console.log(this.format("DEBUG", area, message));
    }

    export function info(area: string, message: string): void {
        console.log(this.format("INFO", area, message));
    }

    export function warning(area: string, message: string): void {
        console.warn(this.format("WARN", area, message));
    }

    export function error(area: string, message: string): void {
        console.error(this.format("ERROR", area, message));
    }

    export function format(type: string, area: string, message: string): string {
        return moment().format("hh:mm:ss:SS") + " " + type + ": " + area + ": " + message;
    }
}