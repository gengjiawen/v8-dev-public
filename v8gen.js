const { execSync } = require("child_process")

const generateCmd = (cpuArch) => {
  return `
gn gen --export-compile-commands out/${cpuArch}.release \
--args='is_component_build = false
is_debug = false
target_os = "linux"
target_cpu = "${cpuArch}"
v8_target_cpu = "${cpuArch}"
v8_use_external_startup_data = false
use_custom_libcxx = false
v8_static_library = true
v8_monolithic = true
use_goma = false
goma_dir = "None"
v8_enable_backtrace = true
v8_enable_disassembler = true
v8_enable_object_print = true
v8_enable_verify_heap = true'
`
}

const execCmd = cmd => {
  console.log(cmd)
  try {
    const out = execSync(cmd)
    console.log(out.toString())
  } catch (error) {
    console.error(error.stdout.toString())
    console.error(error.stderr.toString())
  }
}

execCmd(generateCmd("arm64"))
execCmd(generateCmd("x64"))
