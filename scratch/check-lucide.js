const lucide = require('lucide-react');
const icons = ['Twitter', 'Linkedin', 'Github', 'Facebook', 'Instagram', 'Slack', 'Youtube'];
icons.forEach(icon => {
  console.log(`${icon}: ${lucide[icon] !== undefined}`);
  console.log(`${icon}Icon: ${lucide[icon + 'Icon'] !== undefined}`);
});
