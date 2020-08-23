export class TextUtils {
    public static camelCaseToLowerCaseDashSeparated(text: string): string {
        return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
}