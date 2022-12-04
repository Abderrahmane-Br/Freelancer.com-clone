let filters = {
    projects: [
        {
            type: "title",
            value: "Project type"
        },
        {
            type: "checkbox",
            label: "Fixed price",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Hourly rate",
            isChecked: false
        },
        {
            type: "title",
            value: "Fixed price"
        },
        {
            type: "moneyInput",
            label: "min",
            placeholder: "0",
            role: "money"
        },
        {
            type: "moneyInput",
            label: "max",
            placeholder: "1500+",
            role: "money"
        },
        {
            type: "title",
            value: "Hourly rate"
        },
        {
            type: "moneyInput",
            label: "min",
            placeholder: "0",
            role: "money"
        },
        {
            type: "moneyInput",
            label: "max",
            placeholder: "80+",
            role: "money"
        },
        {
            type: "title",
            value: "Skills"
        },

        {
            type: "searchInput",
            placeholder: "Search skills",
            role: "search"
        },
        {
            type: "checkbox",
            label: "ReactJS",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "Javascript",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "CSS3",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "Responsive Design",
            isChecked: true
        },
        {
            type: "title",
            value: "Client's country"
        },
        {
            type: "searchInput",
            placeholder: "Search country",
            role: "search"
        },
        {
            type: "title",
            value: "Languages"
        },
        {
            type: "searchInput",
            placeholder: "Search languages",
            role: "search"
        },
        {
            type: "checkbox",
            label: "Arabic",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "English",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "French",
            isChecked: true
        },

    ],
    contests: [
        {
            type: "title",
            value: "Contest Prize"
        },

        {
            type: "moneyInput",
            label: "min",
            placeholder: "0",
            role: "money"
        },
        {
            type: "moneyInput",
            label: "max",
            placeholder: "1500+",
            role: "money"
        },

        {
            type: "title",
            value: "Skills"
        },

        {
            type: "searchInput",
            placeholder: "Search skills",
            role: "search"
        },
        {
            type: "checkbox",
            label: "ReactJS",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "Javascript",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "CSS3",
            isChecked: true
        },
        {
            type: "checkbox",
            label: "Responsive Design",
            isChecked: true
        },
        {
            type: "title",
            value: "Client's country"
        },
        {
            type: "searchInput",
            placeholder: "Search country",
            role: "search"
        },
        {
            type: "title",
            value: "Listing type"
        },
        {
            type: "checkbox",
            label: "Featured",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Sealed",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Highlight",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Guaranteed",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Top Contest",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "NDA",
            isChecked: false
        },
        {
            type: "checkbox",
            label: "Urgent",
            isChecked: false
        },

    ]
}

export { filters };