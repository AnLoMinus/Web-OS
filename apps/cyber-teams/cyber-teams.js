class CyberTeams {
  constructor() {
    this.teams = {
      red: [
        {
          name: "Exploitation Experts",
          role: "Vulnerability Assessment Specialist",
          description:
            "Specialists in identifying and exploiting vulnerabilities in systems, always staying one step ahead of defenses.",
          actions: [
            "Conduct vulnerability assessments and scans.",
            "Simulate real-world attack scenarios.",
            "Develop proof-of-concept exploits.",
            "Report findings and recommend remediation strategies.",
          ],
        },
        {
          name: "PenTest Phantoms",
          role: "Penetration Tester",
          description:
            "Masters of penetration testing, they operate with stealth, mimicking real-world attackers to evaluate security measures.",
          actions: [
            "Execute penetration tests on applications and networks.",
            "Analyze and document vulnerabilities found.",
            "Collaborate with blue teams to patch identified weaknesses.",
            "Continuously update testing methodologies and tools.",
          ],
        },
        {
          name: "Threat Hunters",
          role: "Red Team Operator",
          description:
            "Highly skilled at simulating attacks and uncovering weaknesses, they proactively seek out potential security gaps.",
          actions: [
            "Monitor threat intelligence feeds for emerging threats.",
            "Conduct red team exercises to test defenses.",
            "Provide training and awareness sessions for security staff.",
            "Analyze attack patterns to improve offensive strategies.",
          ],
        },
      ],
      blue: [
        {
          name: "Security Guardians",
          role: "Security Engineer",
          description:
            "Protectors of the organization, dedicated to implementing and maintaining robust security protocols and measures.",
          actions: [
            "Implement security controls and policies.",
            "Monitor network traffic for suspicious activity.",
            "Regularly update security systems and software.",
            "Conduct security audits and assessments.",
          ],
        },
        {
          name: "Incident Responders",
          role: "Incident Response Analyst",
          description:
            "Quick to react and mitigate threats, they are trained to handle security incidents and ensure business continuity.",
          actions: [
            "Respond to security incidents and breaches.",
            "Conduct forensic analysis of security events.",
            "Develop incident response plans and playbooks.",
            "Coordinate communication during security incidents.",
          ],
        },
        {
          name: "Defensive Analysts",
          role: "Threat Intelligence Analyst",
          description:
            "Focused on monitoring and analyzing security events, they employ threat intelligence to strengthen defenses.",
          actions: [
            "Analyze logs and alerts for potential threats.",
            "Research and identify new attack vectors.",
            "Collaborate with other teams to implement mitigations.",
            "Prepare reports on threat landscape and trends.",
          ],
        },
      ],
      purple: [
        {
          name: "Cyber Synergy Squad",
          role: "Collaboration Specialist",
          description:
            "A coalition that leverages insights from both teams to enhance threat detection and response capabilities across the board.",
          actions: [
            "Facilitate communication between red and blue teams.",
            "Organize joint training sessions and exercises.",
            "Share findings from red team activities with blue team.",
            "Develop joint strategies for security improvements.",
          ],
        },
        {
          name: "Tactical Integration Team",
          role: "Integration Specialist",
          description:
            "Experts in blending offensive and defensive tactics, they develop strategies that improve overall cybersecurity resilience.",
          actions: [
            "Analyze red team results to inform blue team tactics.",
            "Create integrated security playbooks.",
            "Conduct scenario planning for security drills.",
            "Recommend tools and practices for collaboration.",
          ],
        },
        {
          name: "Red-Blue Collaborators",
          role: "Security Liaison",
          description:
            "Facilitators of teamwork between red and blue teams, enhancing communication and shared understanding of threats.",
          actions: [
            "Organize regular meetings to discuss findings and strategies.",
            "Document lessons learned from exercises and incidents.",
            "Promote a culture of shared responsibility for security.",
            "Assist in aligning security objectives across teams.",
          ],
        },
      ],
    };
  }

  renderTeam(teamName) {
    const teamData = this.teams[teamName];
    let html = `<h2 class="${teamName}-team-header">${teamName.toUpperCase()} Team</h2>`;

    teamData.forEach((member) => {
      html += `
        <div class="team-member ${teamName}-team">
          <h3>${member.name}</h3>
          <p><strong>Role:</strong> ${member.role}</p>
          <p><strong>Description:</strong> ${member.description}</p>
          <h4>Actions:</h4>
          <ul>
            ${member.actions.map((action) => `<li>${action}</li>`).join("")}
          </ul>
        </div>
      `;
    });

    return html;
  }

  render() {
    return `
      <div id="cyber-teams-app">
        <h1>Cyber Security Teams</h1>
        ${this.renderTeam("red")}
        ${this.renderTeam("blue")}
        ${this.renderTeam("purple")}
      </div>
    `;
  }
}

// Export the CyberTeams class
window.CyberTeams = CyberTeams;
