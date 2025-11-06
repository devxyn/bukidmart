import vine, { errors } from '@vinejs/vine';

export const validatorService = async (data, schema) => {
  try {
    const validator = vine.compile(schema);
    const output = await validator.validate(data);
    return { success: true, data: output };
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return { success: false, message: error.messages[0].message };
    }
    return { success: false, message: error.message };
  }
};
