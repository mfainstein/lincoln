import md5 from 'md5'
export class TextUtils {
    public static camelCaseToLowerCaseDashSeparated(text: string): string {
        return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    public static md5(text: string): string {
        return md5(text);
    }
}