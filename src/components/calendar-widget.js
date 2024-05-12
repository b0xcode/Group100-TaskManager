import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class CalendarWidget extends LitElement {
    static properties = {
        currentYear: { type: Number },
        currentMonth: { type: Number },
        currentTasks: { type: Array }
    };
    
    static styles = css`
    :host {
        display: block;
        width: 400px;
        height: auto;
        margin: auto;
        background-color: #fff;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid black;
    }
    .calendar-header {
        background-color: #b38add;
        color: white;
        padding: 12px;
        font-size: 20px;
        text-align: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #f3f3f3;
    }
    .days-header, .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        gap: 2px;
        padding: 10px;
    }
    .day, .empty {
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ccc;
    }
    .today {
        background-color: #4CAF50;
        color: white;
    }
`;

constructor() {
    super();
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentTasks = [];
    
}

connectedCallback() {
    super.connectedCallback();
    this.fetchTasks();
}

fetchTasks() {
    this.currentTasks = TaskModel.getTasksForMonth(this.currentMonth, this.currentYear);
    this.requestUpdate();
}

render() {
    return html`
        <div class="calendar-header">Calendar</div>
        <div class="header">
            <button @click="${this.decreaseMonth}">&#10094;</button>
            <span>${this.getMonthName(this.currentMonth)} ${this.currentYear}</span>
            <button @click="${this.increaseMonth}">&#10095;</button>
        </div>
        <div class="days-header">${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => html`<div>${day}</div>`)}</div>
        ${this.renderDays()}
    `;
}

renderDays() {
    const days = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const numDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        days.push(html`<div class="empty"></div>`);
    }

    for (let day = 1; day <= numDays; day++) {
        const classes = ['day'];
        if (this.isToday(day)) classes.push('today');
        if (this.isDue(day)) classes.push('due');
        days.push(html`<div class="${classes.join(' ')}">${day}</div>`);
    }

    return html`<div class="days">${days}</div>`;
}

decreaseMonth() {
    this.changeMonth(-1);
}

increaseMonth() {
    this.changeMonth(1);
}

changeMonth(step) {
    this.currentMonth += step;
    if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
    } else if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
    }
    this.fetchTasks();
}

getMonthName(index) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return monthNames[index];
}

isToday(day) {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === this.currentMonth && today.getFullYear() === this.currentYear;
}

isDue(day) {
    const date = new Date(this.currentYear, this.currentMonth, day);
    return this.currentTasks.some(task => {
        const taskDate = new Date(task.due);
        return taskDate.getDate() === date.getDate();
    });
}
}

customElements.define('calendar-widget', CalendarWidget);





