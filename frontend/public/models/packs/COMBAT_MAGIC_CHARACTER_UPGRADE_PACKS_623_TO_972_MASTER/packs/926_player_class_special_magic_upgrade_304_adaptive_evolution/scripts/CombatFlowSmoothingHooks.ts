export function applyFlowHooks(controller, tuning) {
  controller.inputBufferMs = tuning.free_flow.vault_cancel_window_ms;
  controller.comboDecaySeconds = tuning.free_flow.combo_decay_extended_seconds;
  controller.preserveComboOnCameraCut = tuning.smoothness_flags.camera_cuts_preserve_input_buffer;
  controller.npcAssistExtendsCombo = tuning.smoothness_flags.npc_assist_counts_as_player_combo_extension;
}
