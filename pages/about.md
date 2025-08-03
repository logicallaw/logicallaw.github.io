---
layout: page
title: About
permalink: /about/
weight: 3
---

<!-- Page Title & Introduction -->
### A developer with a strong spirit of challenge

I'm Junho Kim, a junior majoring in Computer Science and Engineering at Inha University.

<!-- 🔧 Custom CSS -->
<style>
  .custom-list li {
    margin-bottom: 10px;
  }

  .about-section {
    padding-bottom: 30px;
  }

  .about-col {
    padding-left: 20px;
    padding-right: 20px;
  }

  .about-row {
    padding: 20px 0;
  }
</style>

<!-- 🧩 Main Content Two-Column Layout -->
<div class="row about-row">

  <!-- Left Column -->
  <div class="col-md-6 about-col">
    <div class="about-section">
      <h3>💬 <strong>Motto</strong></h3>
      <p>Take on challenges and gain as much experience as possible!</p>
    </div>

    <div class="about-section">
      <h3>📌 <strong>Core Values</strong></h3>
      <ul class="custom-list">
        <li>A positive and clear-minded person</li>
        <li>Someone who strives to grow and adapt</li>
        <li><strong>Highly driven and action-oriented</strong></li>
        <li><strong>Tenacious and full of determination</strong></li>
      </ul>
    </div>

    <div class="about-section">
      <h3>💭 <strong>Favorite Words</strong></h3>
      <ul class="custom-list">
        <li>🚀 Challenge</li>
        <li>🔥 Passion</li>
        <li>☀️ Positivity</li>
        <li>🎯 Possibility</li>
      </ul>
    </div>
  </div>

  <!-- Right Column -->
  <div class="col-md-6 about-col">
    <div class="about-section">
      <h3>🗣️ <strong>Strengths</strong></h3>
      <ul class="custom-list">
        <li>I recognize and appreciate others’ strengths</li>
        <li>I take immediate action when a plan is needed</li>
        <li>I’m a good listener and communicator</li>
        <li>I write thoughtful and encouraging messages</li>
        <li>I find solutions even in tough situations</li>
      </ul>
    </div>

    <div class="about-section">
      <h3>✋ <strong>Weaknesses</strong></h3>
      <ul class="custom-list">
        <li>I struggle to clearly express my opinions in English conversations</li>
        <li>I sometimes make mistakes due to hasty decisions</li>
      </ul>
    </div>

    <div class="about-section">
      <h3>🐥 <strong>Major Activities</strong></h3>
      <ul class="custom-list">
        <li><strong>DNSLab Undergraduate Researcher</strong><br>
        Mar. 11, 2025 – Present</li>

        <li><strong>President, Carbon Neutrality Innovation Academy (4th)</strong><br>
        Mar. 12, 2025 – Jun. 23, 2025</li>

        <li><strong>Carbon Neutrality Innovation Academy (3rd)</strong><br>
        Sep. 2, 2024 – Dec. 23, 2024</li>
      </ul>
    </div>
  </div>

</div>

<!-- Skills Section -->
<div class="row">
  {% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
  {% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<!-- Timeline Section -->
<h2 id="experience">Experience</h2>
<div class="row">
  {% include about/timeline.html %}
</div>

<h2 id="education">Awards</h2>
<div class="row">
  {% include about/awards.html %}
</div>