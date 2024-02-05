export const validate = async (schema) => {
    return async (req, res, next) => {
      try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = await parseBody;
        next();
      } catch (error) {
        const status = 422;
        const message = error.errors[0].message;
        const err = {
          status,
          message
        }
       next(err)
      }
    };
  };
  