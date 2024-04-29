class Main {
    constructor() {
    }
    ageClassification(num) {
        return num > 0
            ? num > 24
                ? num > 44
                    ? num > 65
                        ? num > 75
                            ? num > 90
                                ? num > 122
                                    ? null
                                    : 'долгожители'
                                : 'старческий возраст'
                            : 'пожилой возраст'
                        : 'средний возраст'
                    : 'молодой возраст'
                : 'детский возраст'
            : null;
    }

    weekFn(cond) {
        let str = '';
        switch (cond) {
            case 1:
                str = 'Понедельник';
                break;
            case 2:
                str = 'Вторник';
                break;
            case 3:
                str = 'Среда';
                break;
            case 4:
                str = 'Четверг';
                break;
            case 5:
                str = 'Пятница';
                break;
            case 6:
                str = 'Суббота';
                break;
            case 7:
                str = 'Воскресенье';
                break;
            default:
                str = null;
        }
        return str;
    }
}

module.exports = Main