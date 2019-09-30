class ProjectController {
  async listProjects(req, res) {
    res.send({ ok: true });
  }
}

module.exports = new ProjectController();
