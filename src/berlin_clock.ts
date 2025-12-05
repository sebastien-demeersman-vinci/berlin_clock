export function getSingleMinutesRow(minutes: number): string {
    const singleMinutes = minutes % 5;
    return '1'.repeat(singleMinutes) + '0'.repeat(4 - singleMinutes);
}