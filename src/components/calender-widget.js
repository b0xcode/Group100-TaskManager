import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CalendarWidget extends LitElement {
    static properties = {
        currentYear: { type: Number },
        currentMonth: { type: Number },
        currentTasks: { type: Array }
    };
}
